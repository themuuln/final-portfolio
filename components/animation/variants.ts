export const container = {
  hidden: { opacity: 0.3 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const item = {
  hidden: { opacity: 0, x: "100%" },
  show: { opacity: 1, x: 0 },
};

export const cardContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const card = {
  hidden: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export const evenCard = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

export const buttons = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
  },
};
