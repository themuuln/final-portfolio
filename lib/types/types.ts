export type CursorHoverFunction = {
  textEnter: any;
  textLeave: any;
};

export type MixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

export type ChartPercentageProps = {
  left: String;
  right: String;
  leftColor: String;
  rightColor: String;
  leftContext: String;
  rightContext: String;
};

export type VariantsType = {
  default: {
    x: number;
    y: number;
  };
  text: {
    height: number;
    width: number;
    display?: String;
    x: number;
    y: number;
    mixBlendMode?: MixBlendMode;
  };
  transition?: {
    type: string;
    damping: number;
    stiffness: number;
    restDelta: number;
  };
  clicked?: {
    height: number;
    width: number;
    x: number;
    y: number;
    mixBlendMode?: MixBlendMode;
  };
  exit?: {};
};
