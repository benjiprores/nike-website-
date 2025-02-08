import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
    {
        ignores: ['dist', '.eslintrc.cjs'], // Added `.eslintrc.cjs` to ignored patterns
    },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 'latest', // Updated to match `.eslintrc.cjs`
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: {jsx: true},
                sourceType: 'module',
            },
        },
        settings: {
            react: {
                version: '18.2', // Updated to match `.eslintrc.cjs`
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...react.configs['jsx-runtime'].rules,
            ...reactHooks.configs.recommended.rules,
            'react/jsx-no-target-blank': 'off', // Retained this rule from the original `eslint.config.js`
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true},
            ],
            'react/prop-types': 'off', // Added this rule from `.eslintrc.cjs`
        },
    },
];
