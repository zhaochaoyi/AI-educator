const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function copyWithSelection(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }

  textarea.remove();
  return copied;
}

function confirmCopy(button) {
  const originalLabel = button.innerHTML;
  button.textContent = "Copied!";
  showToast("Prompt copied to clipboard");
  window.setTimeout(() => {
    button.innerHTML = originalLabel;
  }, 1800);
}

document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    // textContent includes the prompt even when its <details> element is collapsed.
    const text = target?.textContent.trim();

    if (!text) return;

    // Try the synchronous method first while the browser still recognizes the click.
    if (copyWithSelection(text)) {
      confirmCopy(button);
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      confirmCopy(button);
    } catch {
      showToast("Copy was blocked — please expand and select the prompt");
    }
  });
});

document.querySelector("details")?.addEventListener("toggle", (event) => {
  const hint = event.currentTarget.querySelector(".summary-hint");
  hint.textContent = event.currentTarget.open ? "Click to collapse" : "Click to expand";
  hint.style.visibility = "visible";
});
