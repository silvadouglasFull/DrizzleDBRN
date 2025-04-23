import empresa from "@dbEmpresaSchema/index";
import setor from "@dbSetorSchema/index";
import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const user = sqliteTable("users", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name", { length: 100 }).notNull(),
    usu_email: text("usu_email", { length: 100 }).notNull(),
    usu_emp: integer("usu_emp").notNull().references(() => empresa.id),
    usu_ativo: integer("usu_ativo").default(0),
    usu_set: integer("usu_set").notNull().references(() => setor.id),
    usu_img: text("usu_img").default(""),
    usu_gp: integer("usu_gp").notNull(),
    password: text("password").default(""),
    created_at: text('timestamp')
        .notNull()
        .default(sql`(current_timestamp)`),
    updated_at: text('timestamp')
        .notNull()
        .default(sql`(current_timestamp)`),
});

export default user