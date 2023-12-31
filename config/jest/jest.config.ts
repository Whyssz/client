import path from 'path';

export default {
	rootDir: '../../',
	globals: {
		__IS_DEV__: true,
		__API_URL__: '',
		__PROJECT__: 'jest',
	},
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleDirectories: ['node_modules', 'src'],
	modulePaths: ['<rootDir>'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	moduleNameMapper: {
		'^entities/(.*)$': '<rootDir>/src/entities/$1',
		// '^features/(.*)$': '<rootDir>/src/features/$1',
		// '^pages/(.*)$': '<rootDir>/src/pages/$1',
		'\\.s?scss$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
	},
};
