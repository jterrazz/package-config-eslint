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
        'simple-import-sort',
        'unused-imports',
        'unicorn'
    ],
    rules: {
        // Prettier
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

        // Forbid unused variables and imports
        "no-unused-vars": "off", // or "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
            "warn",
            { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
        ],

        // Sorting keys in objects
        'sort-keys-fix/sort-keys-fix': 'warn',

        // Sorting variables
        'sort-vars': 'error',

        // Sorting imports
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
                    ['^@utils(/.*|$)', '/utils(?!/?$)', '/utils/?$'],

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
