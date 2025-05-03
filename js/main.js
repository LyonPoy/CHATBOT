// Elemen navigasi
const chatTab = document.getElementById("navChat");
const karakterTab = document.getElementById("navKarakter");
const settingTab = document.getElementById("navSetting");

// Elemen view
const chatView = document.getElementById("chatView");
const karakterView = document.getElementById("karakterView");
const settingView = document.getElementById("settingView");

// Fungsi tampilkan view
function showView(view) {
  chatView.classList.add("hidden");
  karakterView.classList.add("hidden");
  settingView.classList.add("hidden");
  
  view.classList.remove("hidden");
}

// Event listener navigasi
chatTab.addEventListener("click", () => showView(chatView));
karakterTab.addEventListener("click", () => showView(karakterView));
settingTab.addEventListener("click", () => showView(settingView));

// Tampilkan view awal
document.addEventListener("DOMContentLoaded", () => {
  showView(chatView);
});
