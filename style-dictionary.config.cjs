module.exports = {
  source: [
    'node_modules/@primer/primitives/dist/tokens/**/*.json'
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'primer',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    }
  }
}