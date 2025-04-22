import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
const user = sqliteTable("users", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    usu_email: text("usu_email").notNull(),
    usu_emp: integer("usu_emp").notNull(),
    usu_ativo: integer("usu_ativo").default(0),
    usu_set: integer("usu_set").notNull(),
    usu_img: text("usu_img").default(""),
    usu_gp: integer("usu_gp").notNull(),
    password: text("password").default("")
});

export default user