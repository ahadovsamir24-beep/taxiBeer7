// הפעלת Preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
  }, 3000); // Preloader למשך 3 שניות
});
