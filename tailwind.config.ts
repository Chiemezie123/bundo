import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      "2xl": "1440px",
      mxl: { max: "1279px" },
      mlg: { max: "1049px" },
      mmlg: { max: "976px" },
      mmd: { max: "768px" },
      msm: { max: "639px" },
      mxs: { max: "480px" },
      mxxs: { max: "400px" },
      mxxss: { max: "375px" },
      mxxssw: { max: "355px" },
      mxxxs: { max: "320px" },
      "ms-height": { raw: "(max-height: 700px)" },
      "mxl-height": { raw: "(max-height: 850px)" },
    },
    fontFamily: {
      sans: ['TV 2 Sans Display', 'sans-serif'],
    },
    extend: {
      backgroundImage: {},
      fontSize: {
        // H-tags element styles
        "h-xxl": ["3.875rem", { lineHeight: "75.95px", fontWeight: 700 }],
        "h-xl": ["2rem", { lineHeight: "40px", fontWeight: 700 }],
        "h-l": ["1.5rem", { lineHeight: "24px", fontWeight: 700 }],
        "h-m": ["1.125rem", { lineHeight: "24px", fontWeight: 700 }],
        "h-s": ["1rem", { lineHeight: "24px", fontWeight: 700 }],
        "h-xs": ["0.875rem", { lineHeight: "15.96px", fontWeight: 600 }],

        // P-tag element styles
        "p-xxl": ["1.5rem", { lineHeight: "32px", fontWeight: 400 }],
        "p-xl": ["1.1875rem", { lineHeight: "28px", fontWeight: 400 }],
        "p-l": ["1rem", { lineHeight: "16px", fontWeight: 300 }],
        "p-m": ["0.875rem", { lineHeight: "20.02px", fontWeight: 400 }],
        "p-s": ["0.875rem", { lineHeight: "20.02px", fontWeight: 300 }],
        // small-tag element styles
        "c-xxl": ["1.5rem", { lineHeight: "24px", fontWeight: 700 }],
        "c-xl": ["1.1875rem", { lineHeight: "19px", fontWeight: 700 }],
        "c-l": ["0.75rem", { lineHeight: "24px", fontWeight: 500 }],
        "c-lm": ["0.625rem", { lineHeight: "13.495px", fontWeight: 600 }],
        "c-m": ["0.5rem", { lineHeight: "13.495px", fontWeight: 400 }],
        "c-s": ["0.375rem", { lineHeight: "12px", fontWeight: 400 }],
      },
      colors: {
        'mine-shaft': {
        '50': '#f6f5f5',
        '100': '#e8e6e5',
        '200': '#d3d1ce',
        '300': '#b4b1ac',
        '400': '#8e8a82',
        '500': '#736f67',
        '600': '#625f58',
        '700': '#53514b',
        '800': '#484742',
        '900': '#3f3e3a',
        '950': '#302f2c',//small text
    },
      'palm-green': {
        '50': '#f2fbf4',
        '100': '#e1f7e6',
        '200': '#c5edce',
        '300': '#97dea8',
        '400': '#62c67a',
        '500': '#3cab57',
        '600': '#2d8c44',
        '700': '#266f38',
        '800': '#235830',
        '900': '#1e492a',
        '950': '#0a2211',//list header
    },
      'fuscous-gray': {
        '50': '#f6f5f5',
        '100': '#e8e6e5',
        '200': '#d3d1ce',
        '300': '#b4b1ac',
        '400': '#8e8a82',
        '500': '#736f67',
        '600': '#625f58',
        '700': '#504e49',
        '800': '#484742',
        '900': '#3f3e3a',
        '950': '#282724',
    },
    'chateau-green': {
        '50': '#f2fbf4',
        '100': '#e0f8e6',
        '200': '#c3efce',
        '300': '#93e2a8',
        '400': '#5dcb7a',
        '500': '#34a853', //button
        '600': '#289144',
        '700': '#237238',
        '800': '#205b30',
        '900': '#1c4b2a',
        '950': '#0a2914',
    },
    'county-green': {
        '50': '#f2fbf4',
        '100': '#e1f7e6',
        '200': '#c5edce',
        '300': '#98dda8',
        '400': '#63c57a',
        '500': '#3daa57',
        '600': '#2e8b44',
        '700': '#276e39',
        '800': '#235830',
        '900': '#1f482a',
        '950': '#11381c',//header footer
    },
    
    
        //Text
        "text-default": "var(--color-text-default)",
        "text-light": "var(--color-text-light)",
        //background
        listContainer:"#FCFBF8",
        FAQ:"#F1E9DB",
      },
      boxShadow: {
        auth: "0 0 1px 0 #091E424F, 0 8px 12px 0 #091E424F",
      },
      dropShadow: {
        "image-drop-shadow": "-43px 46px 60px 0px #091E424F",
      },
      animation: {
        move: "move 2s linear infinite",
        bxSpin: "bxSpin 0.5s linear infinite",
        shadow: "shadow 0.5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(calc(5 / 2 * 100%))" },
        },
        bxSpin: {
          "17%": { borderBottomRightRadius: "3px" },
          "25%": { transform: "translateY(9px) rotate(22.5deg)" },
          "50%": {
            transform: "translateY(18px) scale(1, .9) rotate(45deg)",
            borderBottomRightRadius: "40px",
          },
          "75%": { transform: "translateY(9px) rotate(67.5deg)" },
          "100%": { transform: "translateY(0) rotate(90deg)" },
        },
        shadow: {
          "0%, 100%": { transform: "scale(1, 1)" },
          "50%": { transform: "scale(1.2, 1)" },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".tab-box-shadow": {
          "box-shadow": "0px 1px px 0px #EAECF0",
        },
        ".page-tab-box-shadow": {
          "box-shadow": "0px 2px 6px 0px #c1c7d066",
        },
        ".dropdown-menu-box-shadow": {
          "box-shadow": "0px 0px 1px 0px #091e424f, 0px 3px 5px 0px #091e4233",
        },
        ".sticky-column-shadow": {
          "box-shadow": "0px -1px 0px 0px #DDDDDD",
        },
        ".hideScrollBar": {
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
        ".hideScrollBar::-webkit-scrollbar": {
          display: "none", // Hide scrollbar in Webkit browsers
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
export default config;
