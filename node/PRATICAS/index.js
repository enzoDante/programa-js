const express = require('express');
const app = express();
const port = 3000;

const Database = require('./db');
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'aulaphpmysql',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const db = new Database(dbConfig);
db.connect();

app.get('/', async (req, res) => {
    try {
        await db.connect();
        const rows = await db.query('SELECT * FROM cliente');
        res.json(rows);
    } catch (err) {
        console.error('Erro ao executar a consulta: ', err);
        res.status(500).json({ error: 'Erro ao executar a consulta' });
    } finally {
        db.close();
    }
    // db.query('SELECT * FROM cliente')
    //     .then(rows => {
    //         console.log('Linhas retornadas: ', rows);
    //         res.json(rows);
    //     })
    //     .catch(err => {
    //         console.log('Erro ao executar a consulta: ', err);
    //         res.status(500).json({ error: 'Erro ao executar a consulta' });
    //     })
        // .finally(() => {
        //     db.close();
        // });

})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})