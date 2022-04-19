export const setWindowHeightProperty = () => {
  // get the viewport height and derive real value for a vh unit
  const vh = window.innerHeight * 0.01;
  // set the value in the --vh custom property to root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};
