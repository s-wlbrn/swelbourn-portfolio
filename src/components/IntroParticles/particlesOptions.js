export const particlesOptions = {
  fullScreen: {
    enable: false,
  },
  fpsLimit: 50,
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
  },
  modes: {
    bubble: {
      distance: 400,
      duration: 2,
      opacity: 0.8,
      size: 40,
    },
    repulse: {
      distance: 200,
      duration: 0.4,
    },
  },
  particles: {
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 40,
    },
    size: {
      random: true,
      value: 3,
    },
    shape: {
      type: 'circle',
    },
    color: '#ad5b3b',
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 4,
      straight: false,
    },
    stroke: {
      width: 2,
      color: '#d99478',
    },
    links: {
      enable: true,
      distance: 150,
      color: '#d99478',
      shadow: {
        enable: true,
        blur: 5,
        color: '#8ec4d9',
      },
    },
  },
  detectRetina: true,
};
