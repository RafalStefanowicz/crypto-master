import { ColorType } from "../styles/theme";

export const getRoiColor = (roi: number) => {
  if (roi > 1) return ColorType.green;
  if (roi < 1) return ColorType.red;
};
