import merge from "deepmerge";
import baseTheme from "gatsby-theme-use-shopping-cart/src/gatsby-plugin-theme-ui";

export default merge(baseTheme, {
  colors: {
    primaryText: "white",
  },
});
