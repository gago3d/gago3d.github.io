(() => {
  const TAGS = [
    { sel: ".ofm-pin-agent-home", text: "Дом", en: "Home" },
    { sel: ".ofm-pin-agent-biz", text: "Локал", en: "Shop" },
    { sel: ".ofm-pin-agent-land", text: "Земја", en: "Land" },
    { sel: ".ofm-pin-agent-seek", text: "Барач", en: "Seeker" },
    { sel: ".ofm-pin-me", text: "Ти", en: "You" }
  ];
  function dress() {
    const en = document.documentElement.lang === "en";
    for (const t of TAGS) {
      document.querySelectorAll(t.sel).forEach((el) => {
        if (el.querySelector(".pin-tag")) return;
        const tag = document.createElement("span");
        tag.className = "pin-tag";
        tag.textContent = en ? t.en : t.text;
        el.appendChild(tag);
      });
    }
  }
  function legend() {
    if (document.getElementById("kmv-legend")) return;
    const box = document.createElement("div");
    box.id = "kmv-legend";
    box.innerHTML = "<p>агенти</p><ul><li><i class=\"lg lg-home\"></i>Дом · станови / куќи</li><li><i class=\"lg lg-biz\"></i>Локал · дуќани</li><li><i class=\"lg lg-land\"></i>Земја · ниви / викенди</li><li><i class=\"lg lg-seek\"></i>Барач · проверка</li></ul>";
    document.body.appendChild(box);
  }
  function boot() { legend(); dress(); setInterval(dress, 1200); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
