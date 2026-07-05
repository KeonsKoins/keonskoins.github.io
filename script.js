const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => navLinks.classList.toggle('open'));

const previewPrices = {
  gold: '$3,340.00 ▲ 0.42%',
  silver: '$36.85 ▲ 0.31%',
  platinum: '$1,410.00 ▼ 0.12%',
  palladium: '$1,125.00 ▲ 0.08%'
};

function loadBullionPreview() {
  Object.entries(previewPrices).forEach(([metal, value]) => {
    const el = document.querySelector(`[data-metal="${metal}"]`);
    if (el) el.textContent = value;
  });
  const updated = document.getElementById('lastUpdated');
  if (updated) {
    updated.textContent = new Date().toLocaleString([], {
      month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
    });
  }
}
loadBullionPreview();
setInterval(loadBullionPreview, 60000);
