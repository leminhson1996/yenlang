import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "vi-VN",
      title: "Yên lặng",
      description: "Giúp bạn cảm nhận được vẻ đẹp cuộc sống.",
    },
    "/en/": {
      lang: "en-US",
      title: "Yên lặng",
      description: "Help you to feel the beauty of our life.",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
