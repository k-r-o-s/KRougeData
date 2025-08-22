package main

import (
	"fmt"
	"net"
	"net/http"
	"os"
	"os/exec"
	"runtime"
)

func OpenBrowser(url string) error {
	var err error
	switch runtime.GOOS {
	case "windows":
		err = exec.Command("cmd", "/c", "start", url).Start()
	case "darwin":
		err = exec.Command("open", url).Start()
	default:
		err = fmt.Errorf("unsupported platform")
	}
	return err
}

func main() {
	// 获取当前工作目录
	currentDir, err := os.Getwd()
	if err != nil {
		fmt.Printf("获取当前目录失败: %v\n", err)
		os.Exit(1)
	}

	// 创建一个文件服务器处理器，将当前目录作为根目录
	// http.Dir() 将字符串路径转换为 http.FileSystem 接口类型
	fileServer := http.FileServer(http.Dir(currentDir))

	http.Handle("/", fileServer)

	// 定义服务器监听的地址和端口
	port := "7770"
	addr := ":" + port

	fmt.Printf("Web 服务器正在运行，根目录是: \n  %s\n", currentDir)
	fmt.Printf("请在浏览器中访问: \n  http://localhost:%s\n", port)

	ips, err := getLocalIPv4s()
	if err == nil {
		fmt.Printf("局域网可能通过以下地址访问:\n")
		for _, ip := range ips {
			fmt.Printf("  http://%s:%s\n", ip, port)
		}
	}
	httpDone := make(chan bool)

	// 启动服务器
	go func() {
		err = http.ListenAndServe(addr, nil)
		if err != nil {
			fmt.Printf("服务器启动失败: %v\n", err)
			os.Exit(1)
		}

		httpDone <- true
	}()

	url := fmt.Sprintf("http://localhost:%s/", port)
	OpenBrowser(url)

	<-httpDone
}

func getLocalIPv4s() ([]string, error) {
	var ips []string
	interfaces, err := net.Interfaces()
	if err != nil {
		return nil, err
	}

	for _, iface := range interfaces {
		// 忽略回环接口（Loopback）
		if iface.Flags&net.FlagLoopback != 0 {
			continue
		}

		addrs, err := iface.Addrs()
		if err != nil {
			continue
		}

		for _, addr := range addrs {
			var ip net.IP
			switch v := addr.(type) {
			case *net.IPNet:
				ip = v.IP
			case *net.IPAddr:
				ip = v.IP
			}
			// 检查是否为有效的 IPv4 地址
			// 同时排除回环地址（Loopback）
			if ip != nil && ip.To4() != nil && !ip.IsLoopback() {
				ips = append(ips, ip.String())
			}
		}
	}
	return ips, nil
}
