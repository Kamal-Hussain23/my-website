// ── Color Picker Live Update ──
// Updates the preview box and value fields when a new color is selected
function updateColorPreview() {
  const colorInput = document.getElementById('colorInput');
  const colorPreview = document.getElementById('colorPreview');
  const hexValue = document.getElementById('hexValue');
  const rgbValue = document.getElementById('rgbValue');
  const hslValue = document.getElementById('hslValue');

  const hex = colorInput.value;
  colorPreview.style.background = hex;
  hexValue.value = hex;

  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  rgbValue.value = `rgb(${r}, ${g}, ${b})`;

  // Convert RGB to HSL
  const rNorm = r / 255;
  const gNorm = g / 255;
  const bNorm = b / 255;
  const max = Math.max(rNorm, gNorm, bNorm);
  const min = Math.min(rNorm, gNorm, bNorm);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rNorm) h = ((gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0)) / 6;
    else if (max === gNorm) h = ((bNorm - rNorm) / d + 2) / 6;
    else h = ((rNorm - gNorm) / d + 4) / 6;
  }

  hslValue.value = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

document.getElementById('colorInput').addEventListener('input', updateColorPreview);

// Initialize color preview on load
updateColorPreview();


// ── Word Counter Stats ──
// Counts words, characters, sentences, and estimated reading time from textarea input
function updateWordCount() {
  const textInput = document.getElementById('textInput');
  const wordCount = document.getElementById('wordCount');
  const charCount = document.getElementById('charCount');
  const sentenceCount = document.getElementById('sentenceCount');
  const readTime = document.getElementById('readTime');

  const text = textInput.value;
  const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const chars = text.length;
  const sentences = text.trim() === '' ? 0 : text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const minutes = Math.ceil(words / 200);

  wordCount.textContent = words;
  charCount.textContent = chars;
  sentenceCount.textContent = sentences;
  readTime.textContent = minutes < 1 ? '<1m' : `${minutes}m`;
}

document.getElementById('textInput').addEventListener('input', updateWordCount);


// ── Tip Calculator ──
// Calculates tip, total, and per-person cost based on bill, tip %, and split count
function calculateTip() {
  const billInput = document.getElementById('billAmount');
  const tipDisplay = document.getElementById('tipAmount');
  const totalDisplay = document.getElementById('totalAmount');
  const perPersonDisplay = document.getElementById('perPerson');
  const splitCount = document.getElementById('splitCount');
  const activeTip = document.querySelector('.tip-btn.active');

  const bill = parseFloat(billInput.value) || 0;
  const tipPercent = parseFloat(activeTip.dataset.tip) || 0;
  const split = parseInt(splitCount.textContent) || 1;

  const tip = bill * (tipPercent / 100);
  const total = bill + tip;
  const per = total / split;

  tipDisplay.textContent = `$${tip.toFixed(2)}`;
  totalDisplay.textContent = `$${total.toFixed(2)}`;
  perPersonDisplay.textContent = `$${per.toFixed(2)}`;
}

// Tip button selection
document.querySelectorAll('.tip-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tip-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');
    calculateTip();
  });
});

// Bill amount input
document.getElementById('billAmount').addEventListener('input', calculateTip);

// Split controls
const splitCount = document.getElementById('splitCount');

document.getElementById('splitMinus').addEventListener('click', function() {
  let count = parseInt(splitCount.textContent) || 1;
  if (count > 1) {
    splitCount.textContent = count - 1;
    calculateTip();
  }
});

document.getElementById('splitPlus').addEventListener('click', function() {
  let count = parseInt(splitCount.textContent) || 1;
  splitCount.textContent = count + 1;
  calculateTip();
});


// ── Nav Highlight on Scroll ──
// Highlights the matching nav link based on which section is in view
function highlightNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let currentSection = '';

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(function(link) {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', highlightNav);

// Initialize nav highlight on load
highlightNav();
