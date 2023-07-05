import path from "path";

export default {
	rootDir: '../../',
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleDirectories: ['node_modules'],
	modulePaths: ['<rootDir>src'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	moduleNameMapper: {
		'\\.s?scss$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx') 
	},
};
