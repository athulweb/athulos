// logic/athulos.js

async function athulosRespond(input) {
  const q = input.toLowerCase().trim();

  // Check custom QnA
  if (customQnA[q]) {
    return customQnA[q];
  }

  // Fallback to DuckDuckGo Instant Answer API
  const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(q)}&format=json&no_redirect=1&no_html=1`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return data.AbstractText || "No clue, but it sounds sus 🤨";
  } catch {
    return "Oops! Internet is not in ypur systme";
  }
}

async function handleChat() {
  const inputEl = document.getElementById("userInput");
  const input = inputEl.value.trim();
  if (!input) return;

  const chatBox = document.getElementById("chatBox");

  // Display user message
  chatBox.innerHTML += `<p><strong>You:</strong> ${input}</p>`;

  // Get AI response
  const response = await athulosRespond(input);
  chatBox.innerHTML += `<p><strong>ATHULOS:</strong> ${response}</p>`;

  speak(response); // Voice output
  inputEl.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
