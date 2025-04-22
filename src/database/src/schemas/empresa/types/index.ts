import empresa from "@dbEmpresaSchema/index"
type Empresa = typeof empresa.$inferSelect
type NewEmpresa = typeof empresa.$inferInsert
type E = typeof empresa
export {
    Empresa,
    NewEmpresa
}
export default E