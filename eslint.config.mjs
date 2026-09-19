import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ['**/*.{ts,tsx}'],

    extends: [tseslint.configs.recommendedTypeChecked],

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },

    rules: {
      // =========================
      // TypeScript
      // =========================

      // Никакого any
      '@typescript-eslint/no-explicit-any': 'error',

      // Запрещаем небезопасные операции с any
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-argument': 'error',
      '@typescript-eslint/no-unsafe-call': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',

      // Никаких !
      '@typescript-eslint/no-non-null-assertion': 'error',

      // Запрещаем ts-ignore / ts-nocheck
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-ignore': true,
          'ts-nocheck': true,
          'ts-expect-error': true,
          'ts-check': false,
        },
      ],

      // Неиспользуемые переменные
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // =========================
      // JavaScript
      // =========================

      // Никаких == и !=
      eqeqeq: ['error', 'always'],

      // Никаких debugger
      'no-debugger': 'error',

      // Никакого eval
      'no-eval': 'error',

      'no-implied-eval': 'error',

      // Дублирующиеся импорты
      'no-duplicate-imports': 'error',

      // console запрещён
      'no-console': 'error',
    },
  },

  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
