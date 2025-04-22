import empresa from "@dbEmpresaSchema/index"
type Empresa = typeof empresa.$inferSelect
type NewEmpresa = typeof empresa.$inferInsert
export {
    Empresa,
    NewEmpresa
}
