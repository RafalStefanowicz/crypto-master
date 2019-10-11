export interface ThemeI {
  color: {
    green: ColorType.green;
    red: ColorType.red;
    navyBlue: ColorType.navyBlue;
  };

  fontSize: {
    smallSpan: FontSize.smallSpan;
    mediumSpan: FontSize.mediumSpan;
    largeSpan: FontSize.largeSpan;
    smallP: FontSize.smallP;
    mediumP: FontSize.mediumP;
    largeP: FontSize.largeP;
    smallHeading: FontSize.smallHeading;
    mediumHeading: FontSize.mediumHeading;
    largeHeading: FontSize.largeHeading;
  };
}

export enum ColorType {
  green = "#1AAF54",
  red = "#FC0D1B",
  navyBlue = "#05386b"
}

export enum FontSize {
  smallSpan = "16px",
  mediumSpan = "20px",
  largeSpan = "24px",
  smallP = "22px",
  mediumP = "26px",
  largeP = "32px",
  smallHeading = "30px",
  mediumHeading = "38px",
  largeHeading = "52px"
}

export const theme: ThemeI = {
  color: {
    green: ColorType.green,
    red: ColorType.red,
    navyBlue: ColorType.navyBlue
  },

  fontSize: {
    smallSpan: FontSize.smallSpan,
    mediumSpan: FontSize.mediumSpan,
    largeSpan: FontSize.largeSpan,
    smallP: FontSize.smallP,
    mediumP: FontSize.mediumP,
    largeP: FontSize.largeP,
    smallHeading: FontSize.smallHeading,
    mediumHeading: FontSize.mediumHeading,
    largeHeading: FontSize.largeHeading
  }
};
