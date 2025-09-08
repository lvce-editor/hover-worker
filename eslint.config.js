import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  {
    rules: {
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-restricted-syntax': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
]
