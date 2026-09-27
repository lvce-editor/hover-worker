import { defineConfig } from 'eslint/config'
import * as config from '@lvce-editor/eslint-config'

export default defineConfig([
  ...config.default,
  ...config.recommendedVirtualDom,
  ...config.recommendedActions,
  ...config.recommendedRegex,
  ...config.recommendedTsconfig,
  // These browser projects combine DOM and Node declarations whose package types conflict.
  {
    files: ['packages/e2e/tsconfig.json', 'packages/hover-worker/tsconfig.json'],
    rules: {
      'tsconfig/dont-skip-lib-check': 'off',
    },
  },
  // Keep the release acceptance suite as a gate before publishing its artifacts.
  {
    files: ['.github/workflows/release.yml'],
    rules: {
      'github-actions/no-e2e-in-release': 'off',
      'github-actions/no-measure-in-release': 'off',
    },
  },
  {
    rules: {
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-restricted-syntax': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
    },
  },
])
