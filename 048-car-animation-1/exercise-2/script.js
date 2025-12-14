document.addEventListener("DOMContentLoaded", () => {
  const character = document.querySelector('.character');
  const street = document.querySelector('.street');
  const background = document.querySelector('.background');
  const foreground = document.querySelector('.foreground');
  const shadow = document.querySelector('.shadow');
  const carWrapper = document.querySelector('.car-wrapper');
  
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
    if (character.getAnimations().find(animation => animation.id === 'jump') || characterAnimation.playState !== 'running') return;

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

    shadow.animate([
      {
        transform: 'scale(1)'
      },
      {
        transform: 'scale(1.5)'
      }
    ], {
      ...jumpAnimation.effect.getComputedTiming()
    });

    await jumpAnimation.finished;

    characterAnimation.play();
    character.classList.remove('jump');
  }

  function togglePlayState () {
    document.getAnimations().forEach(animation => {
      animation[animation.playState === 'paused' ? 'play' : 'pause']();
    });
  }

  function runFaster () {
    if (characterAnimation.playbackRate >= 2) return;

    document.getAnimations().forEach(animation => {
      animation.playbackRate *= 1.1;
    });
  }

  function runSlower () {
    if (characterAnimation.playbackRate <= 0.5) return;

    document.getAnimations().forEach(animation => {
      animation.playbackRate *= 0.9;
    });
  }

  setInterval(() => {
    if (characterAnimation.playState === 'running') {
      runSlower();
    }
  }, 5000);

  async function addNewCar () {
    const car = document.createElement('div');
    car.classList.add('car');

    const carAnimation = car.animate([
      {
        transform: 'translate(-100vw)'
      },
      {
        transform: 'translate(100vw)'
      }
    ], {
      duration: 2000,
      easing: 'linear'
    });

    carWrapper.insertAdjacentElement('afterbegin', car);

    await carAnimation.finished;

    car.remove();
    addNewCar();
  }

  addNewCar();

  document.addEventListener('keyup', (event) => {
    switch (event.code) {
      case 'ArrowUp':
        jump();
        break;
      case 'ArrowLeft':
        runSlower();
        break;
      case 'ArrowRight':
        runFaster();
        break;
      case 'Space':
        togglePlayState();
        break;
    }
  })
});
