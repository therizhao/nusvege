import React from "react";
import { Global, css, connect } from "frontity";
import CircularBook from "../../fonts/circular/CircularStd-Book.woff2";
import CircularItalic from "../../fonts/circular/CircularStd-BookItalic.woff2";
import CircularMedium from "../../fonts/circular/CircularStd-Medium.woff2";
import CircularBold from "../../fonts/circular/CircularStd-Bold.woff2";

const font = {
  circular: {
    normal: CircularBook,
    italic: CircularItalic,
    medium: CircularMedium,
    bold: CircularBold
  }
};

const FontFace = ({ state }) => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: "Circular";
          font-style: normal;
          font-weight: 400;
          font-display: "swap";
          src: url(${font.circular.normal}) format("woff2");
        }

        @font-face {
          font-family: "Circular";
          font-style: italic;
          font-weight: 400;
          font-display: "swap";
          src: url(${font.circular.italic}) format("woff2");
        }
        
        @font-face {
          font-family: "Circular";
          font-style: normal;
          font-weight: 500;
          font-display: "swap";
          src: url(${font.circular.medium}) format("woff2");
        }

        @font-face {
          font-family: "Circular";
          font-style: normal;
          font-weight: 700;
          font-display: "swap";
          src: url(${font.circular.bold}) format("woff2");
        }
      `}
    />
  );
};

export default connect(FontFace);
