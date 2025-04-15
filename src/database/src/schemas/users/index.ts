import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

const user = sqliteTable("users", {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    usu_email: text("usu_email").notNull(),
    usu_emp: integer("usu_emp").notNull(),
    usu_ativo: integer("usu_ativo").default(0),
    usu_set: integer("usu_set").notNull(),
    usu_img: text("usu_img").default(""),
    usu_gp: integer("usu_gp").notNull(),
    set_nivel: integer("set_nivel").default(3),
    set_desc: text("set_desc").notNull(),
    gp_desc: text("gp_desc").notNull(),
});


export default user