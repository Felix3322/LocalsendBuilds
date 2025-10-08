export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
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
    margin-bottom: 1em;
  }
  h2 {
    margin-top: 2em;
    color: #79c0ff;
  }
  .download-btn {
    display: inline-block;
    background: #238636;
    color: white;
    padding: 14px 28px;
    margin: 0.6em 0;
    border-radius: 12px;
    font-size: 1.2em;
    text-decoration: none;
    font-weight: 600;
    box-shadow: 0 0 10px #23863655;
    transition: all 0.2s ease;
  }
  .download-btn:hover {
    background: #2ea043;
    transform: scale(1.05);
    box-shadow: 0 0 20px #2ea04388;
  }
  footer {
    margin-top: 4em;
    font-size: 0.9em;
    color: #8b949e;
  }
</style>
</head>
<body>
  <h1>LocalSend Preview Builds</h1>

  <!-- 🧱 已签名板块暂时注释掉
  <h2>Signed Builds</h2>
  <ul>
    <li><a href="https://cdn.ob-buff.dev/LocalSend_x64_signed.msix">Windows (MSIX, Signed)</a></li>
  </ul>
  -->

  <h2>Unsigned Builds</h2>
  <a class="download-btn" href="https://cdn.ob-buff.dev/LocalSend_x64_unsigned.msix">
    ⬇️ Download Windows (Unsigned MSIX)
  </a>

  <a class="download-btn" href="https://cdn.ob-buff.dev/LocalSend_Android_arm64.apk">
    📱 Download Android (ARM64 APK)
  </a>

  <footer>Maintained by OB_BUFF • Unofficial build preview</footer>
</body>
</html>
`;
    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
    });
  },
};
