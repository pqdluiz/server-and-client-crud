module.exports = {
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  rootDir: ".",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  "collectCoverageFrom": [
    "**/*.(t|j)s",
    "!**/*.module.(t|j)s",
    "!config/*.(t|j)s",
    "!migrations/*.(t|j)s",
    "!main.(t|j)s",
    "!console.(t|j)s"
  ],
}
  