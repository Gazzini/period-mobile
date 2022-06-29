module.exports = {
    root: true,
    env: {
        es6: true,
        'jest/globals': true
    },
    extends: ['@react-native-community/eslint-config'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    ignorePatterns: ['babel.config.js'],
    rules: {
        'react-native/no-inline-styles': 0,
        'prettier/prettier': 0,
        'eslint-comments/no-unlimited-disable': 0,
        'eslint-comments/no-unused-disable': 0,
        'object-curly-spacing': ['error', 'always'],
        'react/jsx-curly-spacing': [
            2,
            {
                when: 'always',
                children: {
                    when: 'always'
                }
            },
            {
                spacing: {
                    objectLiterals: 'always'
                }
            }
        ],
        'eol-last': 0,
        'comma-dangle': ['error', 'never'],
        'max-len': [
            2,
            {
                code: 120,
                ignorePattern: 'd="([\\s\\S]*?)"'
            }
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent', 'object']],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always-and-inside-groups',
                alphabetize: { order: 'asc', caseInsensitive: true },
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'internal',
                        position: 'after'
                    }
                ]
            }
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false
            }
        ],
        quotes: [2, 'single', { avoidEscape: false, allowTemplateLiterals: true }],
        'arrow-parens': [2, 'always'],
        'indent': ['warn', 4]
    },
    globals: {
        JSX: true
    }
};
