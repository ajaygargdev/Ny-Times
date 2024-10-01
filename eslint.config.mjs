import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.jest, cy: "readonly" },
    },
  },

  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      jest: pluginJest,
    },
    rules: {
      "react/prop-types": "error",
    },
  },
];
