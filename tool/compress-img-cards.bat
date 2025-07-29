@echo off
setlocal enabledelayedexpansion

call :CompressPictures "..\img\cards" "..\image\cards"
goto :eof

:CompressPictures

:: 确保输出文件夹存在
if not exist "%~2" (mkdir -p "%~2")
:: 循环处理所有PNG文件
for %%f in ("%~1\*.png") do (
    echo Processing "%%f"...
    set "filename=%~2\%%~nf"
    :: 执行FFmpeg命令
    :: -y 表示重新压缩, 覆盖上次压缩的文件
    :: -n 表示如果发现目标文件已经存在则不压缩, 直接跳过
    ffmpeg -N -i "%%f" -vf scale=240:-1 -quality 75 !filename!.webp
    if !ERRORLEVEL! neq 0 (
        exit /b 1
    )
)
goto :eof