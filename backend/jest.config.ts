import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["./src/tests"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.ts?$",
    moduleFileExtensions: ["ts", "js", "json", "node"]
};