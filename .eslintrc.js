module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react',
        'react-native',
        'unused-imports',
        'import',
        'filenames',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    env: {
        'react-native/react-native': true,
        es6: true,
    },
    rules: {
        // camelCase para variáveis, funções, classes, objetos, constantes
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: [
                    'variable',
                    'function',
                    'parameter',
                    'property',
                    'method',
                    'accessor',
                    'enumMember',
                    'objectLiteralProperty',
                ],
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
                filter: {
                    regex: '^(__|[A-Z_]+)$',
                    match: false,
                },
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],

        // Componentes em PascalCase
        'react/jsx-pascal-case': ['error'],

        // Não usados = aviso
        'no-unused-vars': 'warn',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'unused-imports/no-unused-imports': 'warn',

        // Outras boas práticas
        'react/react-in-jsx-scope': 'off', // Desnecessário com React 17+
        'filenames/match-regex': ['error', '^[a-z][a-zA-Z0-9]+$', true],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
