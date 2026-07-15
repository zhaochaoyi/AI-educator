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
    // textContent includes the prompt even when its <details> element is collapsed.
    const text = target?.textContent.trim();

    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      showToast("Prompt copied to clipboard");
    } catch {
      // Fallback for local files and browsers that block the Clipboard API.
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      showToast(copied ? "Prompt copied to clipboard" : "Unable to copy prompt");
    }
  });
});

document.querySelector("details")?.addEventListener("toggle", (event) => {
  const hint = event.currentTarget.querySelector(".summary-hint");
  hint.textContent = event.currentTarget.open ? "Click to collapse" : "Click to expand";
  hint.style.visibility = "visible";
});
