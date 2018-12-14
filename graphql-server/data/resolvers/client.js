class Cliente {
    constructor(id, { name, lastname, company, emails, age, type, order}) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.company = company;
        this.emails = emails;
        this.age = age;
        this.type = type;
        this.order = order;
    }
}

const clientsDB = {};

export const resolvers = {
    Query: {
        getClient: ({id}) => {
            return new Cliente(id, clientsDB[id])
        },
    },
    Mutation: {
        createClient: ({input}) => {
            const id = require('crypto').randomBytes(10).toString('hex')
            clientsDB[id] = input
            return new Cliente(id, input)
        }
    }
}