/** @ts-check */
/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    extends: [
        "@anolilab/eslint-config",
    ],
    ignorePatterns: ["!**/*"],
    env: {
        // Your environments (which contains several predefined global variables)
        // browser: true,
        node: true,
        commonjs: true,
        es6: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],

            parserOptions: {
                project: "./tsconfig.json",
                // eslint-disable-next-line no-undef
                tsconfigRootDir: __dirname,
            },
        },
    ],
    rules: {
        "import/no-extraneous-dependencies": "off",
        "unicorn/prefer-module": "off"
    }
};
