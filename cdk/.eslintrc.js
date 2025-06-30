module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    'no-console': 'off',
  },
  // Ignore TypeScript-specific files for now - they'll be checked by tsc
  ignorePatterns: ['**/*.d.ts', 'lib/**/*'],
};
