/** @type {import('next').NextConfig} */
const nextConfig = {}

const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc(/* options */)({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});
