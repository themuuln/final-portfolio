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
      staggerChildren: 0.3,
    },
  },
};

export const cardItem = (id: number) => ({
  hidden: {
    opacity: 0,
    x: id % 2 === 0 ? "100%" : "-100%",
  },
  show: { opacity: 1, x: 0, y: 0 },
  whileHover: { scale: 1.2 },
});

export const buttons = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
  },
};

export const contactContainer = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const contactItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const contactSecondItem = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

export const contactThirdItem = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};
