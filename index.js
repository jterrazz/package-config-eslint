module.exports = {
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: [
        '@typescript-eslint',
        'sort-keys-fix',
        'sort-imports-es6-autofix',
    ],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                semi: true,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
        'sort-imports-es6-autofix/sort-imports-es6': [
            'warn',
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'sort-keys-fix/sort-keys-fix': 'warn',
        'sort-vars': 'error',
    },
};
