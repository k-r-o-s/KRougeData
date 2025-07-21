@echo off
setlocal enabledelayedexpansion

call :CompressPictures "..\img\other" "..\image\other"
goto :eof

:CompressPictures

if not exist "%~2" (mkdir -p "%~2")

for %%f in ("%~1\*.png") do (
    echo Processing "%%f"
    ffmpeg -n -i "%%f" -lossless 1 %~2\%%~nf.webp
    if !ERRORLEVEL! neq 0 (
        exit /b 1
    )
)
goto :eof