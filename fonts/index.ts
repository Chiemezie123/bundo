import localFont from "next/font/local";

const tvSans = localFont({
  src: [
 
    {
      path: "./tv-sans/TV2SansDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./tv-sans/TV2SansDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./tv-sans/TV2SansDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./tv-sans/TV2SansDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./tv-sans/TV2SansDisplay-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./tv-sans/TV2SansDisplay-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./tv-sans/TV2SansDisplay-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-tvSans",
  display: "swap",
});

export default tvSans;
