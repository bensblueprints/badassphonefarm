document.documentElement.classList.remove('no-js');

function copyFallback(text) {
  const area = document.createElement('textarea');
  area.value = text;
  area.setAttribute('readonly', '');
  area.style.position = 'fixed';
  area.style.opacity = '0';
  document.body.appendChild(area);
  area.select();
  const copied = document.execCommand('copy');
  area.remove();
  return copied;
}

document.querySelectorAll('[data-year]').forEach((node) => {
  node.textContent = String(new Date().getFullYear());
});

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    nav.dataset.open = String(open);
  };
  setOpen(false);
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const wasOpen = toggle.getAttribute('aria-expanded') === 'true';
    setOpen(false);
    if (wasOpen) toggle.focus();
  });
}

document.querySelectorAll('[data-copy-target]').forEach((button) => {
  button.addEventListener('click', async () => {
    const target = document.querySelector(button.dataset.copyTarget);
    const status = button.closest('.code-card')?.querySelector('[data-copy-status]')
      || button.parentElement.querySelector('[data-copy-status]');
    if (!target) return;
    try {
      if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(target.textContent);
      else if (!copyFallback(target.textContent)) throw new Error('Copy failed');
      button.textContent = 'Copied';
      if (status) status.textContent = 'Code copied to clipboard.';
    } catch {
      if (status) status.textContent = 'Select the code and copy it manually.';
    }
    setTimeout(() => { button.textContent = 'Copy code'; }, 1800);
  });
});
