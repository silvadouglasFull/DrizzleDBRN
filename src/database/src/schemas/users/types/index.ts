import user from "@db/schemas/users";
export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;