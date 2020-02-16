import {DefaultTheme} from '@nehalist/gatsby-theme-nehalem';

const Theme: DefaultTheme = {
  layout: {
    backgroundColor: `#f7f9f9`,
    primaryColor: `#31b890`,
    linkColor: `#a9405a`,
  },
  breakpoints: {
    xs: `425px`,
    sm: `576px`,
    md: `768px`,
    lg: `992px`,
    xl: `1300px`,
  },
  fonts: {
    base: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, ` +
      `Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
  },
  components: {
    container: {
      width: `1260px`,
    },
    header: {
      height: `440px`,
      background: `linear-gradient(-45deg, #a9405a, #31b890) repeat scroll 0 0 transparent`,
    },
  },
};

export default Theme;
