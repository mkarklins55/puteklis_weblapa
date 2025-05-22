
// ====== LIKE / UNLIKE funkcionalitāte ar Cosmos DB ======
document.addEventListener("DOMContentLoaded", attachLikeHandlers);

function attachLikeHandlers() {
  // Pārraksta event listenerus katrai jaunai kartītei
  document.querySelectorAll(".card").forEach(card => {
    const btn  = card.querySelector(".like-btn");
    const span = card.querySelector(".like-count");
    if (!btn || !span) return;

    const idRaw   = card.querySelector("h4")?.textContent.trim() ?? "";
    const songId  = idRaw.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const keyLS   = "like_" + songId;

    // Ielādēt skaitu
    fetch(`https://puteklis-functions.azurewebsites.net/api/like/${songId}`)
      .then(r => r.ok ? r.json() : { count: 0 })
      .then(data => {
        span.textContent = data.count ?? 0;
        if (localStorage.getItem(keyLS) === "1") btn.classList.add("active");
      })
      .catch(console.error);

    // Notīram iepriekšējo listeneri, ja tāds bija
    btn.replaceWith(btn.cloneNode(true));
    const newBtn = card.querySelector(".like-btn");

    newBtn.addEventListener("click", () => {
      const like = !newBtn.classList.contains("active"); // true = pievienot, false = atņemt
      fetch(`https://puteklis-functions.azurewebsites.net/api/like/${songId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ like })
      })
      .then(r => r.json())
      .then(data => {
        span.textContent = data.count ?? "?";
        newBtn.classList.toggle("active", like);
        localStorage.setItem(keyLS, like ? "1" : "0");
        newBtn.classList.add("animate");
        setTimeout(()=>newBtn.classList.remove("animate"),150);
      })
      .catch(err => console.error("Neizdevās saglabāt like:", err));
    });
  });
}
