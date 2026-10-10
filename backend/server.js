import express from 'express';
import { sequelize } from './models/Index.js';
import preencherTabelas from './seed.js';

const app = express();
app.use(express.json())

app.get('/',(req,res) =>{
    res.json({api: 'Biblioteca Digital está funcionando'})
})
await sequelize.sync();
await preencherTabelas();

app.listen(PORTA,() =>{
    console.log(`API rodando em http://localhost:${PORTA}`);
})