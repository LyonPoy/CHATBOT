document.addEventListener("DOMContentLoaded", function() {
  const bgUpload = document.getElementById("bgUpload");
  const applyBgBtn = document.getElementById("applyBgBtn");
  const chatContainer = document.getElementById("chatContainer");
  
  // Terapkan background saat file diupload
  bgUpload.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        // Terapkan gambar sebagai background
        chatContainer.style.backgroundImage = `url(${e.target.result})`;
        chatContainer.style.backgroundSize = "cover"; // Pastikan gambar menutupi seluruh area
        chatContainer.style.backgroundPosition = "center"; // Posisikan gambar di tengah
        chatContainer.style.backgroundRepeat = "no-repeat"; // Jangan ulang gambar
      };
      reader.readAsDataURL(file); // Membaca file gambar
    }
  });
  
  // Terapkan background jika tombol "Terapkan" ditekan
  applyBgBtn.addEventListener("click", function() {
    const file = bgUpload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        // Terapkan gambar sebagai background
        chatContainer.style.backgroundImage = `url(${e.target.result})`;
        chatContainer.style.backgroundSize = "cover";
        chatContainer.style.backgroundPosition = "center";
        chatContainer.style.backgroundRepeat = "no-repeat";
      };
      reader.readAsDataURL(file);
    }
  });
});