document.addEventListener("DOMContentLoaded", () => {
  const character = document.querySelector('.character');
  const street = document.querySelector('.street');
  const background = document.querySelector('.background');
  const foreground = document.querySelector('.foreground');
  
  const characterAnimation = character.animate([
    {
      backgroundPosition: '0 0'
    },
    {
      backgroundPosition: 'calc(var(--char-width) * -7) 0'
    }
  ], {
    duration: 1000,
    iterations: Infinity,
    easing: 'steps(8, jump-none)'
  });

  const streetAnimation = street.animate([
    {
      transform: 'translateX(0)'
    },
    {
      transform: 'translateX(-50%)'
    }
  ], {
    duration: 12000,
    iterations: Infinity,
    easing: 'linear'
  });

  const backgroundAnimation = background.animate([
    {
      transform: 'translateX(100%)'
    },
    {
      transform: 'translateX(-100%)'
    }
  ], {
    duration: streetAnimation.effect.getComputedTiming().duration * 2,
    iterations: Infinity,
    easing: 'linear'
  });

  const foregroundAnimation = foreground.animate([
    {
      transform: 'translateX(200%)'
    },
    {
      transform: 'translateX(-200%)'
    }
  ], {
    duration: streetAnimation.effect.getComputedTiming().duration * 1.5,
    iterations: Infinity,
    easing: 'linear'
  });

  async function jump () {
    if (character.getAnimations().find(animation => animation.id === 'jump')) return;

    characterAnimation.pause();
    character.classList.add('jump');

    const jumpAnimation = character.animate([
      {
        transform: 'translateY(0)'
      },
      {
        transform: 'translateY(-70px)'
      }
    ], {
      id: 'jump',
      duration: 500,
      iterations: 2,
      easing: 'ease-in-out',
      direction: 'alternate'
    });

    await jumpAnimation.finished;

    characterAnimation.play();
    character.classList.remove('jump');
  }

  document.addEventListener('keyup', (event) => {
    switch (event.code) {
      case 'ArrowUp':
        jump();
        break;
      case 'ArrowLeft':
        break;
      case 'ArrowRight':
        break;
      case 'Space':
        break;
    }
  })
});
