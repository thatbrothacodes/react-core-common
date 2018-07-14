export default [{
    input: './src/token/index.js',
    output: {
      file: 'build/token.js',
      format: 'umd',
      name: 'token'
    }
  }, 
  {
    input: './src/http/index.js',
    output: {
      file: 'build/http.js',
      format: 'umd',
      name: 'http'
    }
  },
  {
    input: './src/index.js',
    output: {
      file: 'build/index.js',
      format: 'umd',
      name: 'main'
    }
  }
];