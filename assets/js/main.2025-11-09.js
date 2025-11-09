// ========== Config build ==========
const BUILD_VERSION = "2025-11-09-1";

// Afișează versiunea și data curentă
document.addEventListener("DOMContentLoaded", () => {
  const buildEl = document.getElementById("build");
  const nowEl = document.getElementById("now");
  if (buildEl) buildEl.textContent = BUILD_VERSION;
  if (nowEl) {
    const now = new Date();
    const fmt = new Intl.DateTimeFormat("ro-RO", {
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit"
    });
    nowEl.textContent = fmt.format(now);
  }

  // Buton „bust cache”: reîncarcă pagina cu un query param unic
  const refreshBtn = document.getElementById("refresh");
  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      const url = new URL(window.location.href);
      url.searchParams.set("v", `${BUILD_VERSION}.${Date.now()}`);
      window.location.replace(url.toString());
    });
  }
});
