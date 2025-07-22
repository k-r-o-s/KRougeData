@echo off
setlocal enabledelayedexpansion

call :CompressPictures "..\img\artifacts" "..\image\artifacts"
goto :eof

:CompressPictures

if not exist "%~2" (mkdir -p "%~2")
for %%f in ("%~1\*.png") do (
    echo Processing "%%f"...
    set "filename=%~2\%%~nf"
    ffmpeg -n -i "%%f" -vf scale=64:-1 -quality 80 !filename!.webp
    if !ERRORLEVEL! neq 0 (
        exit /b 1
    )
)
goto :eof