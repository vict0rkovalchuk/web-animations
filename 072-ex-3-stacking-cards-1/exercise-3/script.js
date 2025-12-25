document.addEventListener("DOMContentLoaded", () => {
  const logoSVG = document.getElementById('logo');
  const logoSVGPath = logoSVG.querySelector('.cls-1');

  let restartAnimationTimeout;

  logoSVGPath.addEventListener('animationend', () => {
    logoSVG.classList.remove('animate');
    
    if (restartAnimationTimeout) {
      clearTimeout(restartAnimationTimeout);
    }

    restartAnimationTimeout = setTimeout(() => {
      logoSVG.classList.add('animate');
    }, 5000);
  });
});
