module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
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
  },
  // Only lint JS files at the root level, ignore generated files
  ignorePatterns: [
    'node_modules/**',
    '**/lib/**',
    '**/dist/**',
    '**/*.d.ts',
    'cdk/**', // CDK files are linted separately
    'terraform/**', // Terraform files don't need JS linting
  ],
};
