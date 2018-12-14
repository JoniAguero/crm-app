import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Cliente {
        id: ID
        name: String
        lastname: String
        company: String
        email: String
    }
    type Query {
        cliente: Cliente
    }
`);

export default schema;

