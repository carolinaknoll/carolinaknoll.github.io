const path = require('path')

module.exports = {
  resolve: {
    modules: [path.join(__dirname), path.join(__dirname, 'node_modules')],
    extensions: ['.js', '.css'],
    alias: {
      _atoms: path.resolve(__dirname, 'src', 'components', 'atoms'),
      _components: path.resolve(__dirname, 'src', 'components'),
      _config: path.resolve(__dirname, 'src', 'config'),
      _images: path.resolve(__dirname, 'src', 'images'),
      _molecules: path.resolve(__dirname, 'src', 'components', 'molecules'),
      _organisms: path.resolve(__dirname, 'src', 'components', 'organisms'),
      _pages: path.resolve(__dirname, 'src', 'pages'),
      _fragments: path.resolve(__dirname, 'src', 'pages', 'fragments'),
      _styles: path.resolve(__dirname, 'src', 'styles'),
      _templates: path.resolve(__dirname, 'src', 'components', 'templates'),
      _utils: path.resolve(__dirname, 'src', 'utils'),
    },
  },
}
