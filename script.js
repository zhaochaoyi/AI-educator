const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    const text = target?.innerText.trim();

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      showToast("Prompt copied to clipboard");
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      showToast("Prompt selected — press Ctrl/Cmd + C to copy");
    }
  });
});

document.querySelector("details")?.addEventListener("toggle", (event) => {
  const hint = event.currentTarget.querySelector(".summary-hint");
  hint.textContent = event.currentTarget.open ? "Click to collapse" : "Click to expand";
  hint.style.visibility = "visible";
});
