module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // Custom absolute imports
    '^@/components/(.*)$': '<rootDir>/src/client/components/$1',
    '^@/layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@/assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@/shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@/styles/(.*)$': '<rootDir>/src/client/styles/$1',
    '^@/utils/(.*)$': '<rootDir>/src/shared/utils/$1',
    '^@/server/(.*)$': '<rootDir>/src/server/$1',
    '^@/client/(.*)$': '<rootDir>/src/client/$1',
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      { presets: ['next/babel'], plugins: ['inline-react-svg'] },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
