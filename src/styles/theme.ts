export interface ThemeI {
  color: {
    green: ColorType.green;
    red: ColorType.red;
    navyBlue: ColorType.navyBlue;
  };
}

export enum ColorType {
  green = "#1AAF54",
  red = "#FC0D1B",
  navyBlue = "#05386b"
}

export const theme: ThemeI = {
  color: {
    green: ColorType.green,
    red: ColorType.red,
    navyBlue: ColorType.navyBlue
  }
};
