// Fungsi untuk baca teks dengan suara karakter
function speakText(text, character) {
  // Cek apakah browser mendukung SpeechSynthesis
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Pilih suara berdasarkan karakter
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice = voices.find(voice => voice.name.includes(character.voice || "Google UK English Male"));
    
    utterance.voice = selectedVoice || voices[0]; // Pilih suara default jika karakter tidak punya suara

    // Atur kecepatan dan pitch
    utterance.rate = 1;  // kecepatan bicara normal
    utterance.pitch = 1; // pitch normal

    // Mulai bicara
    speechSynthesis.speak(utterance);
  } else {
    console.log("SpeechSynthesis tidak didukung di browser ini.");
  }
}

// Contoh pemakaian di chat.js
sendBtn.addEventListener("click", async () => {
  const message = chatInput.value.trim();
  if (!message) return;

  appendMessage(message, "user");
  chatInput.value = "";

  showTypingIndicator();

  const translated = toggleTranslate.checked ? `[translate:ON] ` + message : message;

  const reply = await sendToAI(translated);
  removeTypingIndicator();
  appendMessage(reply, "bot");

  // Baca balasan dari karakter
  speakText(reply, currentCharacter);
});