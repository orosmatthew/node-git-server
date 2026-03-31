import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import globals from 'globals';
import ts from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig(
	js.configs.recommended,
	...ts.configs.recommended,
	prettier,
	{
		languageOptions: {
			globals: { ...globals.node }
		},
		rules: {
			'no-undef': 'off'
		}
	},
	{
		languageOptions: {
			parserOptions: { projectService: true, parser: ts.parser }
		}
	},
	{
		rules: {
			eqeqeq: 'error',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/strict-boolean-expressions': 'error',
			'@typescript-eslint/await-thenable': 'error',
			'@typescript-eslint/no-unnecessary-type-assertion': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'error',
			'@typescript-eslint/restrict-template-expressions': 'error'
		}
	},
	{ ignores: ['./eslint.config.mjs', './tsup.config.ts', './vitest.config.js'] }
);
