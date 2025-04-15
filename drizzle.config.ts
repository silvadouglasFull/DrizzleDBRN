import type { Config } from 'drizzle-kit';

export default {
    schema: './src/database/src/schemas/*',
    out: './src/database/src/migrations',
    dialect: 'sqlite',
    driver: 'expo', // <--- very important
} satisfies Config;
