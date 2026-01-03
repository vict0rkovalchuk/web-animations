document.addEventListener("DOMContentLoaded", () => {
  const container1 = document.querySelector('.c-1');
  const container2 = document.querySelector('.c-2');
  const progress = container1.querySelector('.progress .progress-inner');

  const timeline = new ScrollTimeline({
    source: container2,
    axis: 'block'
  });

  const viewTimeline = new ViewTimeline({
    subject: progress,
    axis: 'block'
  });

  console.log(viewTimeline);

  container1.animate([
    {
      backgroundColor: 'salmon'
    }
  ], {
    fill: 'both',
    timeline: viewTimeline
  });

  progress.animate([
    {
      width: 0
    },
    {
      width: '100%'
    }
  ], {
    fill: 'both',
    timeline: viewTimeline,
    rangeStart: {
      rangeName: 'cover',
      offset: CSS.percent('30')
    }
  });
});