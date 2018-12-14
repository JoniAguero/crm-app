import express from 'express';
import chalk from "chalk";

const app = express();

app.get('/', (req,res) => {
    res.send('Hellow World!')
})

const port = process.env.PORT || 8000

console.log('Iniciando Express.js')
app.listen(port, () => {
    console.log(`Server listening on port ${chalk.green(`${port}`)}`)
})