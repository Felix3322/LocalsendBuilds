# LocalSend (Unofficial Build by OB_BUFF)

This repository provides **unofficial preview builds** of [LocalSend](https://localsend.org/), maintained by **OB_BUFF**.  
It is **not affiliated with the official LocalSend project**.

You can browse and download builds from:  
👉 **[localsend.ob-buff.dev](https://localsend.ob-buff.dev)**

---

## 🧩 Overview

This distribution is built from the official LocalSend source code with **minor modifications** to packaging scripts and dependency configurations.  
The purpose is to make the project buildable in my environment and to fix issues related to **dependency conflicts and Fluent UI version mismatches** during MSIX packaging.

---

## 🧱 Key Differences from Official Builds

| Area | Description |
|------|--------------|
| **Build Environment** | Built locally under Windows with specific dependency constraints (some packages were pinned or rebuilt due to version conflicts with the current Fluent UI stack). |
| **MSIX Packaging** | The `.msix` manifest and helper integration were modified to ensure that `msixhelper` is properly included and invoked at runtime. |
| **Build Script** | Uses a custom source directory (`LocalSendBuildSrc`) showing the exact code and script versions I used for the build. |
| **Metadata** | Each build includes commit hash, push date, and changelog extracted directly from the source. |
| **Signing** | These builds are **unsigned** unless stated otherwise. Windows Developer Mode is required for installation. |

---

## ⚙️ Build Source Transparency

All binaries are reproducibly built from the source snapshot shown in **[LocalSendBuildSrc](https://github.com/Felix3322/LocalSendBuildsSrc)**.  
That folder includes:
- The **exact commit hash** used for the build  
- My **packaging modifications**, especially for dependency management and MSIX integration  
- Notes on dependency changes (e.g. Fluent UI version pinning)

---

## 💡 Installation Notes

- **Windows:** Enable Developer Mode to install unsigned `.msix` packages.  
- **Android:** good luck  
- **Verification:** Compare SHA-256 checksums with `versions.json` before installation.

---

## ⚠️ Disclaimer

This is an **unofficial third-party build**, not endorsed by the LocalSend team.  
Use at your own discretion. No warranties are provided for performance, stability, or security.

For official releases, please visit the [LocalSend GitHub repository](https://github.com/localsend/localsend).

---

**Maintained by:** [OB_BUFF](https://ob-buff.dev)  
**Unofficial builds:** [localsend.ob-buff.dev](https://localsend.ob-buff.dev)  
**Contact:** GitHub Issues
