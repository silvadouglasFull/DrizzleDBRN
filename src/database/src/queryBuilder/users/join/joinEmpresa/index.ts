import equal, { EqualInterface } from "@dbOperators/equal"

interface JoinQueryBuilderInterface {
    join(): []
}
class JoinQueryBuilder implements JoinQueryBuilderInterface {
    constructor(private equal: EqualInterface) {

    }
    join(): [] {
        return []
    }
}
export default new JoinQueryBuilder(equal)