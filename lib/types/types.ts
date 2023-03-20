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
