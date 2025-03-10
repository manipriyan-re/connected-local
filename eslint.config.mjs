import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import tailwind from 'eslint-plugin-tailwindcss';
import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const config = [
	{
		ignores: [
			'.next/**',
			'public/**',
			'next.config.js',
			'postcss.config.js',
			'tailwind.config.mjs',
			'node_modules/**',
			'.husky/**',
			'.git/**',
			'.vscode/**',
			'*.log',
			'.env',
			'.env.local',
			'.env.production',
			'.env.development',
			'.env.test',
			'**/*.css',
		],
	},
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	...tailwind.configs['flat/recommended'],
	...compat.config({
		extends: ['next/core-web-vitals', 'next', 'prettier'],
		settings: {
			next: {
				rootDir: ['src'],
			},
		},
	}),
	{
		rules: {
			'no-undef': 'error',
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'no-unused-vars': ['error', { args: 'none' }],
			eqeqeq: 'error',
			'prefer-const': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'arrow-parens': ['error', 'always'],
			'no-implicit-globals': 'error',
			'no-empty-function': 'error',
			'no-duplicate-imports': 'error',
			'consistent-return': 'error',
			camelcase: [
				'error',
				{
					properties: 'never',
					ignoreDestructuring: false,
					ignoreGlobals: false,
					ignoreImports: false,
					allow: ['^[A-Z0-9_]+$'],
				},
			],
			'react/no-array-index-key': 'error',
			'no-nested-ternary': 'error',
			'react/destructuring-assignment': ['error', 'always'],
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'error',
			'tailwindcss/no-custom-classname': 'off',
			'tailwindcss/classnames-order': 'off',
			'tailwindcss/migration-from-tailwind-2': 'error',
			'tailwindcss/enforces-shorthand': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-template': 'error',
		},
	},
	{
		files: ['**/*.{jsx,tsx}'],
		rules: {
			'react/jsx-pascal-case': 'error',
			'react/react-in-jsx-scope': 'off',
			'react/jsx-fragments': ['error', 'syntax'],
		},
	},
];
export default config;
