
// ====== LIKE FUNKCIJA SAISTĪTA AR COSMOS DB ======
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".like-btn").forEach(btn => {
    const title = btn.closest(".card")?.querySelector("h4")?.textContent?.trim() ?? "";
    const safeId = title.toLowerCase().replace(/[^a-z0-9]/g, "_");
    const countSpan = btn.nextElementSibling;
    const storageKey = "like_" + safeId;

    // Ielādē sākotnējo skaitu
    fetch(`https://puteklis-functions.azurewebsites.net/api/like/${safeId}`)
      .then(res => res.json())
      .then(data => {
        countSpan.textContent = data.count ?? 0;
        if (localStorage.getItem(storageKey) === "1") {
          btn.classList.add("active");
        }
      })
      .catch(e => console.error("Neizdevās ielādēt like:", e));

    // Noklikšķinot uz pogas
    btn.addEventListener("click", () => {
      const isActive = btn.classList.toggle("active");
      const newLike = isActive;
      fetch(`https://puteklis-functions.azurewebsites.net/api/like/${safeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ like: newLike })
      })
        .then(res => res.json())
        .then(data => {
          countSpan.textContent = data.count ?? "?";
          localStorage.setItem(storageKey, newLike ? "1" : "0");
          btn.classList.add("animate");
          setTimeout(() => btn.classList.remove("animate"), 150);
        })
        .catch(err => console.error("Neizdevās saglabāt like:", err));
    });
  });
});
