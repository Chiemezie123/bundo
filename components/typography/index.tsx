"use client";

import React, { JSX } from "react";
import { cn } from "@/utils/helpers";
import { cva } from "class-variance-authority";

import { TypographyProps, variantMapping } from "./index.types";

const colorClasses = {
    // Mine Shaft
    "mine-shaft-50": "text-mine-shaft-50",
    "mine-shaft-100": "text-mine-shaft-100",
    "mine-shaft-200": "text-mine-shaft-200",
    "mine-shaft-300": "text-mine-shaft-300",
    "mine-shaft-400": "text-mine-shaft-400",
    "mine-shaft-500": "text-mine-shaft-500",
    "mine-shaft-600": "text-mine-shaft-600",
    "mine-shaft-700": "text-mine-shaft-700",
    "mine-shaft-800": "text-mine-shaft-800",
    "mine-shaft-900": "text-mine-shaft-900",
    "mine-shaft-950": "text-mine-shaft-950",
  
    // Chateau Green
    "chateau-green-50": "text-chateau-green-50",
    "chateau-green-100": "text-chateau-green-100",
    "chateau-green-200": "text-chateau-green-200",
    "chateau-green-300": "text-chateau-green-300",
    "chateau-green-400": "text-chateau-green-400",
    "chateau-green-500": "text-chateau-green-500",
    "chateau-green-600": "text-chateau-green-600",
    "chateau-green-700": "text-chateau-green-700",
    "chateau-green-800": "text-chateau-green-800",
    "chateau-green-900": "text-chateau-green-900",
    "chateau-green-950": "text-chateau-green-950",
  
    // Palm Green
    "palm-green-50": "text-palm-green-50",
    "palm-green-100": "text-palm-green-100",
    "palm-green-200": "text-palm-green-200",
    "palm-green-300": "text-palm-green-300",
    "palm-green-400": "text-palm-green-400",
    "palm-green-500": "text-palm-green-500",
    "palm-green-600": "text-palm-green-600",
    "palm-green-700": "text-palm-green-700",
    "palm-green-800": "text-palm-green-800",
    "palm-green-900": "text-palm-green-900",
    "palm-green-950": "text-palm-green-950",
  
    // Fuscous Gray
    "fuscous-gray-50": "text-fuscous-gray-50",
    "fuscous-gray-100": "text-fuscous-gray-100",
    "fuscous-gray-200": "text-fuscous-gray-200",
    "fuscous-gray-300": "text-fuscous-gray-300",
    "fuscous-gray-400": "text-fuscous-gray-400",
    "fuscous-gray-500": "text-fuscous-gray-500",
    "fuscous-gray-600": "text-fuscous-gray-600",
    "fuscous-gray-700": "text-fuscous-gray-700",
    "fuscous-gray-800": "text-fuscous-gray-800",
    "fuscous-gray-900": "text-fuscous-gray-900",
    "fuscous-gray-950": "text-fuscous-gray-950",
  
    // County Green
    "county-green-50": "text-county-green-50",
    "county-green-100": "text-county-green-100",
    "county-green-200": "text-county-green-200",
    "county-green-300": "text-county-green-300",
    "county-green-400": "text-county-green-400",
    "county-green-500": "text-county-green-500",
    "county-green-600": "text-county-green-600",
    "county-green-700": "text-county-green-700",
    "county-green-800": "text-county-green-800",
    "county-green-900": "text-county-green-900",
    "county-green-950": "text-county-green-950",
  
    // White and Black
    white: "text-white",
    black: "text-black",
  
    // Default and Light Text
    "text-default": "text-text-default",
    "text-light": "text-text-light",
  };
  

export const typography = cva("", {
  variants: {
    intent: {
      "h-xxl":"text-h-xxl mxxl:text-[3rem] mlg:text-h-xl mmd:text-h-xl mxs:text-h-l",
      "h-xl": "text-h-xl mmd:text-h-l mxs:text-h-m ",
      "h-l": "text-h-l mmd:text-h-m mxs:text-h-s",
      "h-m": "text-h-m mmd:text-h-s mxs:text-h-xs",
      "h-s": "text-h-s mmd:text-h-xs mxs:text-p-xxl",
      "h-xs": "text-h-xs mmd:text-p-m mxs:text-p-s",
      "p-xxl": "text-p-xxl mmd:text-p-xl mxs:text-p-l",
      "p-xl": "text-p-xl mmd:text-p-l mxs:text-p-m",
      "p-l": "text-p-l   mmd:text-p-m  mxs:text-p-s" ,
      "p-m": "text-p-m",
      "p-s": "text-p-s",
      "c-xxl": "text-c-xxl ",
      "c-xl": "text-c-xl",
      "c-l": "text-c-l",
      "c-m": "text-c-m",
      "c-s": "text-c-s",
      "c-lm" :"text-c-lm",
      span: "",
      div: "",
    },
    font: {
      sans: "font-tvSans",
    },
    color: colorClasses,
    fontWeight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    underline: { always: "underline", hover: "hover:underline", none: "" },
    align: {
      center: "text-center",
      start: "text-start",
      end: "text-end",
      left: "text-left",
      right: "text-right",
      justify: "text-justify",
    },
  },
  compoundVariants: [],
});

// Typography component
function Typography(props: TypographyProps) {
  const {
    variant = "p-m",
    tag,
    underline = "none",
    fontWeight = "regular",
    gutterBottom,
    noWrap,
    align = "left",
    color = "text-default",
    customClassName = "",
    font = "sans",
    children,
    className,
    ...rest
  } = props;

  // Resolved tag
  const Tag = (tag ||
    variantMapping[variant] ||
    "p") as keyof JSX.IntrinsicElements;

  // Classes
  const classNameI = cn(
    gutterBottom && "mb-4",
    noWrap && "overflow-hidden text-ellipsis whitespace-nowrap",
    className && className,
  );

  return (
    <Tag
      className={typography({
        intent: variant,
        underline,
        fontWeight,
        color,
        align,
        font,
        className: cn(
          classNameI && classNameI,
          customClassName && customClassName,
        ),
      })}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export { Typography };

