const el = document.querySelector('.hamburger');
el.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});
