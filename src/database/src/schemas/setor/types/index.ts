import setor from "@dbSetorSchema/index"
type Setor = typeof setor.$inferSelect
type NewSetor = typeof setor.$inferInsert
type S = typeof setor
export {
    NewSetor, Setor
}
export default S