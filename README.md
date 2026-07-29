# LocalSend Preview Builds

This repository hosts the download site and binary files for unofficial LocalSend preview builds maintained by [OB_BUFF](https://ob-buff.dev).

Website: [localsend.ob-buff.dev](https://localsend.ob-buff.dev)

## Available packages

- Windows: unsigned MSIX and portable ZIP
- Android: APK for arm32, arm64 and x86_64
- Linux: AppImage, DEB and tar.gz

Each source push creates a GitHub prerelease and mirrors its files into `releases/<tag>/`. `builds.json` is the website's build index; every mirrored build also includes `build.json` and `SHA256SUMS.txt`.

The exact build source and automation are available in [Felix3322/LocalSendBuildsSrc](https://github.com/Felix3322/LocalSendBuildsSrc). That repository checks the official `localsend/localsend` main branch daily.

## MSIX installation

The MSIX preview is unsigned. Enable Windows Developer Mode, then run:

```powershell
Add-AppxPackage -Path ".\LocalSend.msix" -AllowUnsigned
```

The portable Windows ZIP does not require MSIX installation.

## Disclaimer

These are unofficial third-party preview builds and are not endorsed by the LocalSend maintainers. Use the official LocalSend distribution when you need a stable release.
