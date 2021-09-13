import { resolve } from 'path'

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: [resolve(__dirname, 'test/setupTests.ts')],
  testEnvironment: 'jsdom',
}
