window.addEventListener('pageswap', async (e) => {
  if (e.viewTransition) {
    console.log('pageswap');
    console.log(e.viewTransition, e.activation);
  }
});

window.addEventListener('pagereveal', async (e) => {
  if (e.viewTransition) {
    console.log('pagereveal');
    console.log(e.viewTransition, navigation.activation);
  }
});