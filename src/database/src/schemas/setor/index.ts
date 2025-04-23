import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const setor = sqliteTable('setor', {
    id: int('id').primaryKey({ autoIncrement: true }),
    set_desc: text('set_desc', { length: 100 }).notNull(),
    set_disp: int('set_disp').notNull().default(1),
    set_nivel: int('set_nivel').notNull(),
    created_at: text('timestamp')
        .notNull()
        .default(sql`(current_timestamp)`),
    updated_at: text('timestamp')
        .notNull()
        .default(sql`(current_timestamp)`),
});
export default setor