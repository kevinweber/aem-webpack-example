{
  "roots": ["../content/jcr_root/"],
  "testRegex": "(/__tests__/.*|\\.(test|spec))\\.js$",
  "transform": {
    "^.+\\.js$": "./internals/jest.preprocessor.js"
  }
}