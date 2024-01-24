module.exports = {
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.ts', '*.tsx'],

            extends: [
                //  Use the recommended rules from the @typescript-eslint/eslint-plugin
                'plugin:@typescript-eslint/recommended',
            ],
            parserOptions: {
                project: [__dirname + '/tsconfig.json'],
            },
            rules: {
                '@typescript-eslint/no-inferrable-types': 'off',
                '@typescript-eslint/explicit-module-boundary-types': 'off',
                '@typescript-eslint/ban-types': 'off',
            },
        },
        {
            files: ['*.mjs', '*.js', '*.jsx', '*.es', '*.cjs'],
        },
        {
            files: ['*.json'],
            plugins: ['json-format'],
            settings: {
                'json/sort-package-json': 'standard',
                'josn/ignore-files': ['**/package-lock.json'],
                'json/json-with-comments-files': ['**/tsconfig.json', '.vscode/**'],
            },
        },
    ],
    plugins: ['@typescript-eslint', 'prettier'],

    rules: {
        'prettier/prettier': 'error',
        'no-console': 'off',
        'no-bitwise': 'off',
        quotes: ['error', 'single'],
        'max-len': ['error', 120],
        'arrow-parens': 'off',
    },
};
