module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  ignorePatterns: ['node_modules/*', 'build/*', '.out/*', '!.prettierrc.js'],
  plugins: ['prettier', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      { usePrettierrc: true },
    ],
    'no-template-curly-in-string': 'off',
    'react-hooks/exhaustive-deps': 0,
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'typescript-eslint/ban-ts-comment': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
