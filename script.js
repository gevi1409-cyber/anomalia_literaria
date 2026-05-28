const header = document.querySelector("[data-header]");
const copyButton = document.querySelector("[data-copy-mail]");
const copyStatus = document.querySelector("[data-copy-status]");
const email = "contacto@anomalialiteraria.com";

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 24);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    copyStatus.textContent = `${email} copiado`;
  } catch {
    copyStatus.textContent = email;
  }
});
