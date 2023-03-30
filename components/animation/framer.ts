export const chart = {
  initial: { x: 100, y: 100, opacity: 0 },
  whileInView: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  whileHover: { y: -2 },
};

export const slideFromBottom = {
  initial: { y: 100 },
  whileInView: { y: 0 },
};

export const slideFromRight = {
  initial: { x: 100 },
  whileInView: { x: 0 },
};

export const slideFromLeft = {
  initial: { x: -100 },
  whileInView: { x: 0 },
};
