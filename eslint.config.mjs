import js from '@eslint/js';

/**
 * @type import('eslint').Linter.Config[]
 */
export default [
	{
		files: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 12
			},
			sourceType: 'module'
		},
		rules: {
			...js.configs.recommended.rules
		}
	},
]
