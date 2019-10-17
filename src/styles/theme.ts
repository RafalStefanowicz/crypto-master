export interface ThemeI {
  color: {
    green: ColorType.green;
    red: ColorType.red;
    navyBlue: ColorType.navyBlue;
    lightGreen: ColorType.lightGreen;
    lightRed: ColorType.lightRed;
  };
}

export enum ColorType {
  green = "#1AAF54",
  red = "#FC0D1B",
  lightGreen = "rgba(26, 175, 84, 0.4)",
  lightRed = "rgba(252, 13, 27, 0.4)",
  navyBlue = "#05386b"
}

export const theme: ThemeI = {
  color: {
    green: ColorType.green,
    red: ColorType.red,
    navyBlue: ColorType.navyBlue,
    lightGreen: ColorType.lightGreen,
    lightRed: ColorType.lightRed
  }
};
