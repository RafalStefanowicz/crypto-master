import React from "react";

const SvgFacebookIcon = props => (
  <svg viewBox="0 0 1600 1600" {...props}>
    <linearGradient
      id="facebookIcon_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={800}
      y1={1590.281}
      x2={800}
      y2={0}
    >
      <stop offset={0} stopColor="#1569cb" />
      <stop offset={1} stopColor="#29aef3" />
    </linearGradient>
    <path
      d="M1600 800c0-441.8-358.2-800-800-800S0 358.2 0 800c0 399.3 292.5 730.3 675 790.3v-559H471.9V800H675V623.8c0-200.5 119.4-311.3 302.2-311.3 87.5 0 179.1 15.6 179.1 15.6V525h-100.9C956 525 925 586.7 925 649.9V800h221.9l-35.5 231.3H925v559c382.5-60 675-391 675-790.3"
      fill="url(#facebookIcon_svg__a)"
    />
    <path
      d="M1146.9 800H925V649.9c0-63.3 31-124.9 130.4-124.9h100.9V328.1s-91.6-15.6-179.1-15.6C794.4 312.5 675 423.3 675 623.8V800H471.9v231.3H675v559c40.7 6.4 82.5 9.7 125 9.7s84.3-3.3 125-9.7v-559h186.4l35.5-231.3z"
      fill="#fff"
    />
  </svg>
);

export default SvgFacebookIcon;
