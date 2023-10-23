module.exports = {
  testEnvironment: 'jsdom', // 브라우저 환경에서 테스트
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
