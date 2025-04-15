type CredentialsObject = {
    userName: string,
    password: string
}
type ConfigDb = {
    name: string,
    host: string,
    credentials: CredentialsObject
}
const configDb: ConfigDb = {
    name: 'ds-web-mobile',
    host: '',
    credentials: {
        userName: '',
        password: '',
    },
}
export {
    ConfigDb,
    configDb
}