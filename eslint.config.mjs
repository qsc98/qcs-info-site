import { FlatCompat } from '@eslint/eslintrc'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**'],
  },
  ...nextCoreWebVitals,
  ...compat.extends('plugin:import/recommended', 'plugin:tailwindcss/recommended'),
  {
    rules: {
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['sibling', 'parent', 'index']],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  prettier,
]

export default config
