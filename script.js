document.addEventListener("DOMContentLoaded", () => {

  /* === LOAD ANIMATION === */
  setTimeout(() => {
    document.body.classList.remove("not-loaded");
  }, 1000);

  /* === BINTANG === */
  const universe = document.querySelector('.universe');
  if (universe) {
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div');
      star.style.position = 'absolute';
      star.style.width = '2px';
      star.style.height = '2px';
      star.style.background = 'white';
      star.style.opacity = Math.random();
      star.style.top = Math.random() * 100 + '%';
      star.style.left = Math.random() * 100 + '%';
      universe.appendChild(star);
    }
  }

  /* === AUDIO === */
  const audio = document.getElementById("bgSound");

  const startAudio = () => {
    if (!audio) return;
    audio.volume = 0.7;
    audio.play().catch(() => {});
  };

  document.addEventListener("touchstart", startAudio, { once: true });
  document.addEventListener("click", startAudio, { once: true });


});
