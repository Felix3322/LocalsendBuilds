export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // -----------------------------
    // (1) 文件分发逻辑
    // -----------------------------
    if (path.startsWith("/downloads/")) {
      const fileName = path.substring("/downloads/".length);
      try {
        const object = await env.DOWNLOADS_BUCKET?.get(fileName);
        if (!object) return new Response("404 File Not Found", { status: 404 });
        const headers = new Headers();
        headers.set("Content-Type", guessMime(fileName));
        headers.set("Cache-Control", "public, max-age=3600");
        return new Response(object.body, { headers });
      } catch {
        return new Response("Error loading file.", { status: 500 });
      }
    }

    // -----------------------------
    // (2) 从 versions.json 读取版本信息
    // -----------------------------
    let data;
    try {
      const res = await fetch(`${url.origin}/versions.json`);
      data = await res.json();
    } catch (e) {
      return new Response("Failed to load version data.", { status: 500 });
    }

    // -----------------------------
    // (3) 渲染原界面样式
    // -----------------------------
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
  .download-btn {
    display: inline-block;
    background: #238636;
    color: white;
    padding: 0.7em 1.4em;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.05em;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
  }
  .download-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(35,134,54,0.5);
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
    I don’t have a paid signing certificate (it’s surprisingly expensive 😅) — if anyone can help with signing, I’d be super grateful ❤️
  </div>

  <div class="note">
    🧭 <strong>How to enable Developer Mode:</strong><br>
    1️⃣ Press <code>Win + I</code> to open <em>Settings</em>.<br>
    2️⃣ Go to <strong>System → For Developers</strong>.<br>
    3️⃣ Turn on <strong>Developer Mode</strong> and confirm when prompted.<br><br>
    ⚙️ <strong>Installing unsigned MSIX via PowerShell:</strong><br>
    <code>Add-AppxPackage "C:\\path\\to\\localsend_app_0.msix"</code>
  </div>

  <div class="version">
    <h2><a href="https://github.com/localsend/localsend/commit/${data.commit}" target="_blank">${data.commit}</a></h2>
    <p>📅 Push date: <time>${data.push_date}</time></p>
    <p>🧰 ${data.changelog}</p>

    <div class="downloads">
      <a class="download-btn" href="${data.unsigned}" target="_blank" rel="noopener noreferrer">⬇️ Download MSIX (Unsigned)</a>
    </div>

    <!-- 已签名部分已注释掉 -->
    <!--
    <div class="downloads downloads-signed" style="margin-top:0.6em;">
       <a class="download-btn" style="background:#ffae57;" href="${data.signed}" target="_blank" rel="noopener noreferrer">🔏 MSIX (Signed)</a> 
    </div>
    ${data.signed_warning ? `<div class="warning">⚠️ Signed with leaked key.</div>` : ""}
    -->
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

// 辅助函数：猜 MIME
function guessMime(file) {
  if (file.endsWith(".msix")) return "application/msix";
  if (file.endsWith(".apk")) return "application/vnd.android.package-archive";
  if (file.endsWith(".zip")) return "application/zip";
  return "application/octet-stream";
}
