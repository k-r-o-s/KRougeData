$folderPath = "build\"

# $scriptDir 脚本所在的目录
$scriptDir = $PSScriptRoot

# 获取 $scriptDir 的父目录
$parentDir = Split-Path -Parent $scriptDir

# 把项目根目录作为当前工作目录
Set-Location $parentDir

# 1. 删除目录（如果存在）
# -Recurse: 递归删除子文件夹和文件
# -Force: 不提示确认，强制删除（包括只读文件等）
# -ErrorAction SilentlyContinue: 如果目录不存在，不显示错误信息，继续执行
Remove-Item -Path $folderPath -Recurse -Force -ErrorAction SilentlyContinue

# 2. 重新创建目录
# -Force: 如果父目录不存在，也会创建；如果目录已存在（尽管我们刚才删除了），也不会报错
New-Item -Path $folderPath -ItemType Directory -Force

# 编译 server.exe
go build -o server.exe server/server.go

# 拷贝所需文件
Copy-Item -Path "server.exe" -Destination $folderPath # -Recurse
Copy-Item -Path "README.md" -Destination $folderPath # -Recurse
Copy-Item -Path "favicon.ico" -Destination $folderPath # -Recurse
Copy-Item -Path "index.html" -Destination $folderPath # -Recurse
Copy-Item -Path "css" -Destination $folderPath -Recurse
Copy-Item -Path "data" -Destination $folderPath -Recurse
Copy-Item -Path "image" -Destination $folderPath -Recurse
Copy-Item -Path "proto" -Destination $folderPath -Recurse
Copy-Item -Path "script" -Destination $folderPath -Recurse

# 压缩
Compress-Archive -Path "$parentDir\build\*" -DestinationPath "$parentDir\build\build.zip"