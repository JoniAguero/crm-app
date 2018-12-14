import express from 'express';
import chalk from 'chalk';
import graphqlHTTP from 'express-graphql';
import schema from './schemas';

const app = express();

app.get('/', (req, res) => {
    res.send('Hellow World!')
})

const root = {
    cliente: () => {
        return {
            "id": 1,
            "name": "Joni",
            "lastname": "Aguero",
            "company": "Udemy",
            "emails": [
                {email: "correo@corre.com"},
                {email: "correo2@corre2.com"}
            ]
        }
    }
}
// graphqlHTTP nos permite conectar graphql con express
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))

const port = process.env.PORT || 8000

console.log('Iniciando Express.js')
app.listen(port, () => {
    console.log(`Server listening on port ${chalk.green(`${port}`)}`)
})