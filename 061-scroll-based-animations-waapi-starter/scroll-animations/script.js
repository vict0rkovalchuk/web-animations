document.addEventListener("DOMContentLoaded", () => {
  const container1 = document.querySelector('.c-1');
  const container2 = document.querySelector('.c-2');

  const timeline1 = new ScrollTimeline({
    source: container1,
    axis: 'block'
  });

  const timeline2 = new ScrollTimeline({
    source: container2,
    axis: 'block'
  });

  console.log(timeline2);

  container1.animate([
    {
      backgroundColor: 'salmon'
    }
  ], {
    fill: 'both',
    timeline: timeline2
  });
});