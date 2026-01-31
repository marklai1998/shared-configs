export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-line-length': [2, 'always', 150], // release-please "Co-authored-by" is long
  },
};
