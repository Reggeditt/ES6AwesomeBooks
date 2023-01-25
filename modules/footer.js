export default function renderFooter() {
  const footer = document.createElement('footer');
  const footerText = document.createElement('small');
  footerText.className = 'footer-text';
  footerText.textContent = 'This is the footer. copyright 2023.';
  footer.appendChild(footerText);
  document.body.appendChild(footer);
}