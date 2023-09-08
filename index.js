module.exports = {
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:promise/recommended',
        'plugin:sonarjs/recommended',
        'plugin:jest/recommended',
    ],
    parser: '@typescript-eslint/parser',
    ignorePatterns: ['jest.config.ts'],
    parserOptions: {
        ecmaVersion: 'latest',
        'project': './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'sort-keys-fix',
        'simple-import-sort',
        'unused-imports',
        'unicorn',
        'promise',
        'jest',
        'sonarjs',
    ],
    env: {
        'jest/globals': true,
    },
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
            },
        ],

        // Forbid unused variables and imports
        'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],

        // Safety
        '@typescript-eslint/no-floating-promises': 'error',
        'no-return-await': 'error',

        // Sorting keys in objects
        'sort-keys-fix/sort-keys-fix': 'warn',

        // Sorting variables
        'sort-vars': 'error',

        // Sorting imports
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
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
                    ['^.+\\.?(css)$'],
                ],
            },
        ],
    },
};
