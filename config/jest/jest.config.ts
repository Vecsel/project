/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    globals: {
        __IS_DEV__: true,
    },
    // Автоматически очищайте фиктивные вызовы, экземпляры, контексты и результаты перед каждым тестом
    clearMocks: true,
    // Тестовая среда, которая будет использоваться для тестирования
    testEnvironment: 'jsdom',
    // Пути, которые будут проигнорированы при сборе покрытия
    coveragePathIgnorePatterns: [
        '\\\\node_modules\\\\',
    ],
    // Директории, которые Jest будет искать вместе с node_modules
    moduleDirectories: [
        'node_modules',
    ],

    modulePaths: [
        '<rootDir>src',
    ],
    // Расширения файлов, которые Jest будет искать в модулях
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    // Корневая директория, в которой Jest будет искать файлы
    rootDir: '../../',
    // Шаблоны паттернов, которые Jest использует для обнаружения тестовых файл
    testMatch: [
        // эта регулярка должна работать везде
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
    ],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        axios: 'axios/dist/node/axios.cjs',
    },
    transformIgnorePatterns: ['node_modules/(?!axios)'],

    // Indicates whether the coverage information should be collected while executing the test
    // collectCoverage: false,

    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,

    // The directory where Jest should output its coverage files
    // coverageDirectory: undefined,

    // An array of regexp pattern strings used to skip coverage collection

    // Indicates which provider should be used to instrument code for coverage
    // coverageProvider: "babel",

    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,

    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,

    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,

    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],

    // A path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,

    // A path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,

    // A set of global variables that need to be available in all test environments

    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",

// An array of directory names to be searched recursively up from the requiring module's location
};
