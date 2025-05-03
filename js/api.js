const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY = "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";
const DEFAULT_MODEL = "deepseek/deepseek-r1:free";

// Fungsi kirim pesan ke AI
async function sendToAI(message) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": "https://yourdomain.com",  // opsional
        "X-Title": "AI Roleplay Chat"
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        messages: [
          { role: "system", content: "Kamu adalah karakter AI untuk roleplay eksplisit." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Gagal memuat balasan.";
    return reply.trim();
  } catch (err) {
    console.error("API error:", err);
    return "Terjadi kesalahan koneksi.";
  }
}