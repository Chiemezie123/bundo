export const variantMapping = {
    "h-xxl": "h1",
    "h-xl": "h2",
    "h-l": "h3",
    "h-m": "h4",
    "h-s": "h5",
    "h-xs": "h6",
    "p-xxl": "p",
    "p-xl": "p",
    "p-l": "p",
    "p-m": "p",
    "p-s": "p",
    "c-xxl": "h3",
    "c-xl": "h4",
    "c-l": "p",
    "c-m": "p",
    "c-s": "p",
    "c-lm" :'p',
    span: "span",
    div: "div",
  };
  
  export type TypographyVariant = keyof typeof variantMapping;
  
  export type TypographyColors =
    //Text Colors
    | "text-default"
    | "text-light"
    | "mine-shaft-50"
    | "mine-shaft-100"
    | "mine-shaft-100"
    | "mine-shaft-200"
    | "mine-shaft-300"
    | "mine-shaft-400"
    | "mine-shaft-500"
    | "mine-shaft-600"
    | "mine-shaft-700"
    | "mine-shaft-800"
    | "mine-shaft-900"
    | "mine-shaft-950"
   //green
    | "chateau-green-50"
    | "chateau-green-100"
    | "chateau-green-200"
    | "chateau-green-300"
    | "chateau-green-400"
    | "chateau-green-500"
    | "chateau-green-600"
    | "chateau-green-700"
    | "chateau-green-800"
    | "chateau-green-900"
    | "chateau-green-950"
    //palm-green
    | "palm-green-50"
    | "palm-green-100"
    | "palm-green-200"
    | "palm-green-300"
    | "palm-green-400"
    | "palm-green-500"
    | "palm-green-600"
    | "palm-green-700"
    | "palm-green-800"
    | "palm-green-900"
    | "palm-green-950"
    //fucous gray
    | "fuscous-gray-50"
    | "fuscous-gray-100"
    | "fuscous-gray-200"
    | "fuscous-gray-300"
    | "fuscous-gray-400"
    | "fuscous-gray-500"
    | "fuscous-gray-600"
    | "fuscous-gray-700"
    | "fuscous-gray-800"
    | "fuscous-gray-900"
    | "fuscous-gray-950"
    //county-green
    | "county-green-50"
    | "county-green-100"
    | "county-green-200"
    | "county-green-300"
    | "county-green-400"
    | "county-green-500"
    | "county-green-600"
    | "county-green-700"
    | "county-green-800"
    | "county-green-900"
    | "county-green-950"
    //white
    | "white"
    //black
    | "black"
  export type TypographyAlign =
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify";
  
  export type TypographyFontWeight =
    | "thin"
    | "extralight"
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "black";
  
  export type TypographyFont = "sans";
  
  export interface TypographyProps
    extends React.HTMLAttributes<HTMLOrSVGElement> {
    tag?: keyof JSX.IntrinsicElements;
    variant?: TypographyVariant;
    color?: TypographyColors;
    fontWeight?: TypographyFontWeight;
    gutterBottom?: boolean;
    align?: TypographyAlign;
    noWrap?: boolean;
    underline?: "none" | "always" | "hover";
    customClassName?: string;
    children?: React.ReactNode;
    font?: TypographyFont;
  }
  