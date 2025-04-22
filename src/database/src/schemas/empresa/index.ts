import { sql } from 'drizzle-orm';

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const empresa = sqliteTable('empresa', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    emp_nome: text('emp_nome', { length: 50 }).notNull(),
    emp_cnpj: text('emp_cnpj', { length: 20 }).notNull(),
    created_at: text('timestamp')
        .notNull()
        .default(sql`(current_timestamp)`),
    updated_at: text('timestamp')
        .notNull()
        .default(sql`(current_timestamp)`),
    emp_ativo: integer('emp_ativo').notNull().default(1),
});
export default empresa