// Inisialisasi karakter default saat start
document.addEventListener("DOMContentLoaded", () => {
  // Contoh karakter default
  const defaultChar = {
    name: "Luna",
    icon: "img/luna.png"
  };
  applyCharacter(defaultChar);
  showView(chatView);
});

// Load karakter dari JSON (jika karakter.json dipakai)
async function loadKarakterList() {
  try {
    const response = await fetch("character.json");
    const karakterData = await response.json();

    const list = document.getElementById("karakterList");
    list.innerHTML = ""; // Kosongkan dulu

    karakterData.forEach((char, index) => {
      const card = document.createElement("div");
      card.className = "karakter-card";
      card.innerHTML = `
        <img src="${char.icon}" alt="${char.name}" />
        <div class="karakter-info">
          <h4>${char.name}</h4>
          <p>${char.gender} | ${char.personality}</p>
        </div>
      `;
      card.addEventListener("click", () => {
        applyCharacter(char);
        showView(chatView);
      });
      list.appendChild(card);
    });

  } catch (error) {
    console.error("Gagal memuat karakter:", error);
  }
}