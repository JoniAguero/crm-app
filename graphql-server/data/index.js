import { clientResolvers } from './resolvers/client';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = importSchema('data/schemas/client.graphql')
const schema = makeExecutableSchema({typeDefs, clientResolvers})

export { schema };