export const chart = {
  initial: { x: 100, y: 100, opacity: 0.3 },
  whileInView: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  whileHover: { y: -2 },
};

export const slidefromTop = {
  initial: { y: -100, opacity: 0.3 },
  whileInView: { y: 0, opacity: 1 },
};

export const slideFromBottom = {
  initial: { y: 100, opacity: 0.3 },
  whileInView: { y: 0, opacity: 1 },
};

export const slideFromRight = {
  initial: { x: "100%", opacity: 0.3 },
  whileInView: { x: 0, opacity: 1 },
};

export const slideFromLeft = {
  initial: { x: "-100%", opacity: 0.3 },
  whileInView: { x: 0, opacity: 1 },
};
