const startGameButton = document.getElementById("start-game-btn");
const promptCard = document.getElementById("prompt-card");
const promptCategory = document.getElementById("prompt-category");
const promptText = document.getElementById("prompt-text");

startGameButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * PROMPTS.length);
  const selectedPrompt = PROMPTS[randomIndex];

  promptCategory.textContent = selectedPrompt.category;
  promptText.textContent = selectedPrompt.text;

  promptCard.classList.remove("hidden");
  startGameButton.textContent = "Show Another Case";
});