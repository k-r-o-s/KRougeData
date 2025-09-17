#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
# 这可以确保脚本在任何命令失败时立即停止。
set -e

# 把一个目录中的 png 文件压缩成另一个目录的 webp 文件
# 接受两个参数: 源目录和目标目录
CompressPictures() {
  local source_dir="$1"
  local dest_dir="$2"

  # 确保输出文件夹存在, 如果不存在则创建它
  mkdir -p "$dest_dir"

  # 循环处理源目录中的所有 PNG 文件
  for file in "$source_dir"/*.png; do
    # 是否是正常的文件
    if [ ! -f "$file" ]; then
      continue
    fi

    # 提取文件名（不含路径和扩展名）, 并构建目标文件路径
    # 使用 `basename` 命令获取文件名, 并移除 `.png` 扩展名
    filename=$(basename "$file" .png)
    output_path="$dest_dir/$filename.webp"

    if [ -f "$output_path" ]; then
      echo "  [$output_path] already exists, ignored"
      continue
    fi

    echo
    echo "-------------------------------------------------------------------------------------"
    echo "  Processing [$file] --> [$output_path] ..."
    echo "-------------------------------------------------------------------------------------"
    echo

    # 执行 FFmpeg 命令进行压缩
    # -n 表示如果目标文件已存在则不覆盖
    # -y 表示覆盖目标文件, 如果你想覆盖上次压缩的文件, 可以使用 -y 代替 -n
    ffmpeg -n -i "$file" -vf scale=240:-1 -quality 75 "$output_path"
  done
}

# 调用函数并传递源目录和目标目录
CompressPictures "../img/artifacts" "../image/artifacts"
CompressPictures "../img/cards" "../image/cards"
CompressPictures "../img/other" "../image/other"
CompressPictures "../img/paths" "../image/paths"
CompressPictures "../img/upgrades" "../image/upgrades"
