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
        'simple-import-sort'
    ],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                semi: true,
                singleQuote: true,
                trailingComma: 'all',
                tabWidth: 4,
                useTabs: false,
                printWidth: 100,
                'editor.formatOnSave': true,
            },
        ],
        'sort-keys-fix/sort-keys-fix': 'warn',
        'sort-vars': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                'groups': [
                    // External packages
                    ['^react', '^@?\\w'],

                    // Internal architecture.
                    ['^@configuration(/.*|$)', '/configuration(?!/?$)', '/configuration/?$'],
                    ['^@application(/.*|$)', '/application(?!/?$)', '/application/?$'],
                    ['^@domain(/.*|$)', '/domain(?!/?$)', '/domain/?$'],
                    ['^@ports(/.*|$)', '/ports(?!/?$)', '/ports/?$'],
                    ['^@adapters(/.*|$)', '/adapters(?!/?$)', '/adapters/?$'],
                    ['^@infrastructure(/.*|$)', '/infrastructure(?!/?$)', '/infrastructure/?$'],

                    // Parent imports. Put `..` last.
                    ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                    // Other relative imports. Put same-folder imports and `.` last.
                    ['^\\./(?=.*/)(?!/?$)', '^\\\\.(?!/?$)", "^\\\\./?$'],
                    // Style imports.
                    ['^.+\\.?(css)$']
                ]
            }
        ]
    },
};
