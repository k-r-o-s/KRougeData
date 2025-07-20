@echo off
setlocal enabledelayedexpansion

call :CompressPictures "..\img\other" "..\image\other"
goto :eof

:CompressPictures

:: 确保输出文件夹存在
if not exist "%~2" (mkdir -p "%~2")
:: 循环处理所有PNG文件
for %%f in ("%~1\*.png") do (
    echo Processing "%%f"...
    set "filename=%~2\%%~nf"
    :: 执行FFmpeg命令
    ffmpeg -i "%%f" -lossless 1 !filename!.webp
    if !ERRORLEVEL! neq 0 (
        exit /b 1
    )
)
goto :eof