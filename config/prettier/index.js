module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  trailingComma: 'es5',
  useTabs: false,
  tabWidth: 2,
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  pluginSearchDirs: ['.'],
  importOrder: [
    '^react/(.*)$',
    '^next/(.*)$',
    '^@react-aria/(.*)$',
    '^@react-stately/(.*)$',
    '^@react-types/(.*)$',
    '^@marigold/(.*)$',
    '^@/theme/(.*)$',
    '^@/ui/(.*)$',
    '^@components/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};