const chatContainer = document.getElementById("chatContainer");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const toggleTranslate = document.getElementById("toggleTranslate");

let isTyping = false;
let currentCharacter = {
  name: "AI Roleplay",
  icon: "img/default-character.png"
};

// Ganti karakter dari luar file
function applyCharacter(character) {
  currentCharacter = character;
  document.getElementById("charName").textContent = character.name;
  document.getElementById("charIcon").src = character.icon;
}

function appendMessage(content, sender = "bot") {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", sender);
  bubble.textContent = content;
  chatContainer.appendChild(bubble);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function showTypingIndicator() {
  if (isTyping) return;
  isTyping = true;
  const typing = document.createElement("div");
  typing.classList.add("bubble", "bot");
  typing.id = "typingIndicator";
  typing.innerHTML = `
    <div class="typing-indicator">
      <span></span><span></span><span></span>
    </div>
  `;
  chatContainer.appendChild(typing);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById("typingIndicator");
  if (typing) typing.remove();
  isTyping = false;
}

// Handle kirim pesan
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
});