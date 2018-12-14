import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Cliente {
        id: ID
        name: String
        lastname: String
        company: String
        emails: [Email]
    }
    type Email {
        email: String
    }
    type Query {
        cliente: Cliente
    }
`);

export default schema;

