import localFont from "next/font/local";

export const satoshi = localFont({
  src: [
    {
      path: "./Satoshi/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Satoshi/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});
