#!/bin/bash

# 定义文件夹路径
folderPath="build/"

# 获取脚本的绝对路径，并获取其所在的目录
scriptDir=$(cd "$(dirname "$0")" && pwd)
parentDir=$(dirname "$scriptDir")

# 将项目根目录作为当前工作目录
cd "$parentDir"
echo
echo "当前目录为: "$(pwd)

# 定义一个数组，存储需要编译和拷贝的文件/目录
filesToBuild=(
  "README.md"
  "favicon.ico"
  "index.html"
  "css"
  "data"
  "image"
  "proto"
  "script"
  "server.exe"
)

# 1. 删除目录
echo
echo "删除目录: "$folderPath
rm -rf "$folderPath"

tempFolder="${folderPath}temp"

# 2. 重新创建目录
mkdir -p "$folderPath"
mkdir -p "$tempFolder"

# 编译 server.go
echo
echo "编译 server.exe"
go build -o ./server.exe server/server.go

# 拷贝所需文件
# 遍历数组，将每个文件/目录拷贝到 tempFolder
echo
echo "拷贝文件目标目录: "$tempFolder
for file in "${filesToBuild[@]}"; do
  echo "  "$file
  cp -r "$file" "$tempFolder"
done

FileToBuild="${parentDir}/build/build.zip"

# 将 Bash 风格的路径转换为 Windows 风格
zipFileToBuild=$(cygpath -w "$FileToBuild")
zipTempFolder=$(cygpath -w "${parentDir}/build/temp")

echo
echo "即将压缩文件: "$zipFileToBuild

# 压缩文件（使用 Bandizip 命令行工具）
echo
echo "执行压缩命令"
zip_command=("/d/apps/bandizip/Bandizip.x64.exe" a "$zipFileToBuild")
echo ${zip_command[@]}
for file in "${filesToBuild[@]}"; do
  echo "  ${zipTempFolder}\\$file"
  zip_command+=("${zipTempFolder}\\$file")
done

# 执行压缩命令
"${zip_command[@]}"

# 清理掉其他文件
echo
echo "删除临时文件夹: "$tempFolder
rm -rf "$tempFolder"