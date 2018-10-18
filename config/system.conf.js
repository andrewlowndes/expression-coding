System.config({
  paths: {
    'npm:': 'node_modules/'
  },
  packages: {
    '.': {
      defaultExtension: 'js'
    }
  },
  map: {
    'ts-debounce': 'npm:ts-debounce/dist/src/index.js'
  }
});
