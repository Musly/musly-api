module.exports = {
  extends: [
    'airbnb-base',
  ],
  env: {
    jest: true,
    node: true,
  },
  plugins: [
    'extra-rules',
  ],
  rules: {
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'capitalized-comments': 0,
    'comma-dangle': [2, {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    'import/extensions': [2, 'never'],
    semi: [2, 'never'],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],
    'no-prototype-builtins': 1,
    'require-jsdoc': 0,
    // Reference: http://eslint.org/docs/rules/valid-jsdoc
    'valid-jsdoc': [2, {
      requireReturn: false,
      requireReturnDescription: true,
      preferType: {
        Boolean: 'boolean',
        Number: 'number',
        String: 'string',
        object: 'Object',
        array: 'Array',
      },
    }],
    // 'object-curly-newline': 0,
    'prefer-arrow-callback': 0,
    'extra-rules/no-commented-out-code': 0,
    'extra-rules/no-single-line-objects': 0,
    'extra-rules/potential-point-free': 0
  }
}
