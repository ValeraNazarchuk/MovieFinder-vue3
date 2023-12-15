/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        "plugin:vue/recommended",
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier",
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    plugins: ["prettier"],
    // added settings
    rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }],
        "vue/no-multiple-template-root": "off",
    },
};
