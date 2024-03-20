module.exports = {
  // Массив путей, по которым Jest будет искать файлы тестов
  testMatch: ['**/__tests__/**/*.js'],
  testEnvironment: 'jsdom',

  // Модули, которые Jest должен использовать для тестирования
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // preset: 'ts-jest',

  // Расширения файлов, которые Jest будет тестировать
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  moduleDirectories: [
    'node_modules',
    __dirname, // the root directory
  ],

  // Дополнительные настройки Jest
}
