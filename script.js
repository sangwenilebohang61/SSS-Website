// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  btn.setAttribute('aria-expanded', false);
}));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Quote form -> opens WhatsApp with the message filled in
const WHATSAPP_NUMBER = '27843343181'; // 084 334 3181 in international format
const form = document.getElementById('quote-form');
const msg = document.getElementById('form-msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  [form.name, form.phone].forEach(f => f.classList.toggle('invalid', !f.value.trim()));
  if (!name || !phone) {
    msg.textContent = 'Please enter your name and phone number.';
    return;
  }
  msg.textContent = '';
  const text =
    `Hello Sangweni Security Services, I would like a quote.\n\n` +
    `Name: ${name}\nPhone: ${phone}\nService: ${form.service.value}\n` +
    `Details: ${form.message.value.trim() || 'N/A'}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
