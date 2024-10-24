import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";

export default tseslint.config({
  extends: [pluginJs.configs.recommended, ...tseslint.configs.recommended],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    import: eslintPluginImport,
  },
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "*",
            group: "external",
            position: "before",
          },
          {
            pattern: "@app/controllers/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/dtos/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/errors/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/middlewares/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@app/services/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
});
