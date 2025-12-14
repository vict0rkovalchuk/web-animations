document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.square');

  const squareAnimation = element.animate(
    [
      {
        transform: 'translateX(0)',
        easing: 'ease-in'
      },
      {
        backgroundColor: 'blue',
        offset: 0.8,
        composite: 'replace'
      },
      {
        transform: 'translateX(calc(100vw - 100px)) rotate(360deg)',
        backgroundColor: 'crimson',
      }
    ],
    {
      duration: 3000,
      // delay: 1000,
      direction: 'alternate',
      fill: 'both',
      iterations: 2,
      easing: 'linear',
      composite: 'add',
      iterationComposite: 'accumulate',
      timeline: document.timeline
    }
  );

  console.log(squareAnimation);

  squareAnimation.pause();

  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('play')) {
        squareAnimation.play();
      }
      if (button.classList.contains('pause')) {
        squareAnimation.pause();
      }
      if (button.classList.contains('cancel')) {
        squareAnimation.cancel();
      }
      if (button.classList.contains('reverse')) {
        squareAnimation.reverse();
      }
      if (button.classList.contains('finish')) {
        squareAnimation.finish();
      }
      if (button.classList.contains('changeAnimation')) {
        squareAnimation.effect.setKeyframes([
          {
            transform: "translateY(0)",
          },
          {
            backgroundColor: "greenyellow",
            offset: 0.8,
          },
          {
            transform: "translateY(calc(100vh - 100px)) rotate(360deg)",
            backgroundColor: "purple",
          }
        ]);
      }
    });
  });

  const playbackRateInput = document.getElementById('playbackRateInput');
  const playbackRateInputValue = document.getElementById('playbackRateInputValue');

  playbackRateInput.addEventListener('input', (e) => {
    const target = e.target;
    const value = target.value;

    squareAnimation.updatePlaybackRate(value);
    playbackRateInputValue.value = value;
  });

  const durationInput = document.getElementById('durationInput');
  const durationInputValue = document.getElementById('durationInputValue');

  durationInput.addEventListener('input', (e) => {
    const target = e.target;
    const value = target.value;

    squareAnimation.effect.updateTiming({
      duration: +value
    });

    durationInputValue.value = value;
  });

  const infiniteInput = document.getElementById('infiniteInput');

  infiniteInput.addEventListener('change', (e) => {
    const target = e.target;
    const isChecked = target.checked;

    squareAnimation.effect.updateTiming({
      iterations: isChecked ? Infinity : 2
    })
  });
});