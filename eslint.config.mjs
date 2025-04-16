import { defineConfig, globalIgnores } from "eslint/config";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import unusedImports from "eslint-plugin-unused-imports";
import _import from "eslint-plugin-import";
import filenames from "eslint-plugin-filenames";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([]), {
    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-native/all",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
    )),

    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        react: fixupPluginRules(react),
        "react-native": fixupPluginRules(reactNative),
        "unused-imports": unusedImports,
        import: fixupPluginRules(_import),
        "simple-import-sort": fixupPluginRules(simpleImportSort),
        filenames,
    },

    languageOptions: {
        globals: {
            ...reactNative.environments["react-native"]["react-native"],
        },

        parser: tsParser,
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "@typescript-eslint/naming-convention": ["error", {
            selector: [
                "variable",
                "function",
                "parameter",
                "property",
                "method",
                "accessor",
                "enumMember",
                "objectLiteralProperty",
            ],

            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",

            filter: {
                regex: "^(__|[A-Z_]+)$",
                match: false,
            },
        }, {
                selector: "typeLike",
                format: ["PascalCase"],
            }],

        "react/jsx-pascal-case": ["error"],
        "no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": ["warn"],
        "unused-imports/no-unused-imports": "warn",
        "react/react-in-jsx-scope": "off",
        "filenames/match-regex": ["error", "^[a-z][a-zA-Z0-9]+$", true],
        "simple-import-sort/imports": [
            "warn",
            {
                groups: [
                    // React e React Native no topo
                    ["^react$", "^react-native$"],

                    // Imports de pacotes (node_modules) com default (ex: import x from '...')
                    ["^\\u0000", "^@?\\w.*$"],

                    // Imports absolutos e relativos com default
                    ["^@/(.*)$", "^[./].*[^}{]$"],

                    // Imports com destructuring (com chaves)
                    ["^[./].*\\{.*\\}$"],
                ],
            },
        ],

        "simple-import-sort/exports": "warn",
        "import/first": "error",
        "import/no-duplicates": "error",
    }
}]);