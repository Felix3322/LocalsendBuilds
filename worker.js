export default {
  async fetch(request, env, ctx) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>LocalSend Builds - OB_BUFF.dev</title>
<meta name="description" content="Unofficial LocalSend preview builds maintained by OB_BUFF. Includes Windows MSIX, EXE, and Android ARM64 APK." />
<meta property="og:title" content="LocalSend Preview Builds" />
<meta property="og:description" content="Download unofficial preview builds of LocalSend for Windows and Android." />
<meta property="og:site_name" content="OB_BUFF.dev" />
<meta name="theme-color" content="#0d1117" />
<style>
  body {
    font-family: system-ui, sans-serif;
    background: #0d1117;
    color: #e6edf3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 3em 1em;
  }
  h1 {
    color: #58a6ff;
    margin-bottom: 0.5em;
  }
  .version {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    padding: 1em 1.5em;
    margin: 1em 0;
    width: 90%;
    max-width: 700px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.25);
  }
  .version h2 {
    color: #d2a8ff;
    margin-bottom: 0.3em;
    word-break: break-all;
  }
  a {
    color: #58a6ff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  .note {
    background: linear-gradient(180deg,#1b1f26 0%, #20262f 100%);
    border-left: 4px solid #58a6ff;
    padding: 1em;
    margin-top: 1.5em;
    border-radius: 8px;
    color: #c1c8d1;
    max-width: 715px;
    line-height: 1.5;
  }
  .downloads a {
    margin-right: 0.5em;
  }
  .downloads-signed a {
    color: #ffae57;
  }
  .warning {
    color: #ffae57;
    font-size: 0.9em;
    margin-top: 0.4em;
    background: rgba(255, 174, 87, 0.1);
    padding: 0.5em 0.8em;
    border-radius: 6px;
  }
  code {
    background: #1c2128;
    padding: 0.2em 0.4em;
    border-radius: 4px;
    color: #c9d1d9;
  }
  footer {
    margin-top: 3em;
    font-size: 0.85em;
    color: #7d8590;
  }
</style>
</head>
<body>
  <h1>LocalSend - Unofficial Builds</h1>
  
  <div class="note">
    💡 <strong>Tip:</strong><br>
    Linux users can easily build LocalSend from source, so only Windows and Android builds are provided here.<br><br>

    🪟 <strong>Windows:</strong> the <strong>MSIX package requires Developer Mode</strong> to be enabled before installation.<br>
    I don’t have a paid signing certificate (it’s surprisingly expensive 😅) — if anyone can help with signing, I’d be super grateful ❤️<br><br>

    ⚠️ <strong>Signed:</strong> the signed MSIX uses a leaked private key.  
    Some antivirus or SmartScreen filters may flag it as unsafe.  
    Please only install if you trust the source and verify the file hash before running.
  </div>

  <div class="note">
    🧭 <strong>How to enable Developer Mode:</strong><br>
    1️⃣ Press <code>Win + I</code> to open <em>Settings</em>.<br>
    2️⃣ Go to <strong>System → For Developers</strong>.<br>
    3️⃣ Turn on <strong>Developer Mode</strong> and confirm when prompted.<br><br>

    ⚙️ <strong>Installing unsigned MSIX via PowerShell:</strong><br>
    1️⃣ Right-click the <code>.msix</code> file → choose <em>Copy as path</em>.<br>
    2️⃣ Open <strong>PowerShell</strong> (Run as Administrator).<br>
    3️⃣ Run this command:<br>
    <code>Add-AppxPackage "C:\\path\\to\\localsend_app_0.msix"</code><br><br>

    💡 If you get a policy restriction error, make sure Developer Mode is enabled and PowerShell is running as admin.
  </div>

  <div class="version">
    <h2>
      <a href="https://github.com/localsend/localsend/commit/86adfd67afef5fd79b8f4cedc395ffa886c4e939" target="_blank" rel="noopener noreferrer">
        git-86adfd67afef5fd79b8f4cedc395ffa886c4e939-preview
      </a>
    </h2>

    <p class="push-date">📅 Push date: <time datetime="2025-10-05">2025-10-05</time></p>

    <p class="changelog">
      🧰
      <a href="https://github.blog/changelog/2025-01-15-github-actions-ubuntu-20-runner-image-brownout-dates-and-other-breaking-changes/#ubuntu-20-image-is-closing-down" target="_blank" rel="noopener noreferrer">
        chore: migrate GitHub Actions runners from ubuntu-20 to ubuntu-24 (#2743)
      </a>
    </p>

    <div class="downloads">
      <a href="https://ob-buff.dev/downloads/localsend_app_0.msix" target="_blank" rel="noopener noreferrer">🪟 MSIX</a> ·
    </div>

    <div class="downloads downloads-signed" style="margin-top:0.6em;">
      <!-- <a href="https://ob-buff.dev/downloads/localsend-1.8.0-preview-signed.msix" target="_blank" rel="noopener noreferrer">🔏 MSIX (Signed)</a> -->
    </div>

    <div class="warning">
      ⚠️ This file is <strong>signed using a leaked private key</strong> — some antivirus or SmartScreen may flag it as unsafe.<br>
      Install only if you trust the source, and verify the file hash if possible.
    </div>
  </div>

  <footer>
    Built by <a href="https://ob-buff.dev" target="_blank" rel="noopener noreferrer">OB_BUFF</a> — unofficial community builds.
  </footer>
</body>
</html>`;
    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
  },
};
