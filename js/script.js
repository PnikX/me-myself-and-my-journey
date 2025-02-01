// Example: Toggle mobile menu
const nav = document.querySelector('nav ul');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'Menu';
toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
document.querySelector('header').appendChild(toggleBtn);