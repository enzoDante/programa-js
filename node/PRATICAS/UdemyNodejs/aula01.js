const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json([
        {"valor": "teste 1"},
    ]);
});

//http://localhost:8080/menu/stringQualquer/outroValor
app.get('/menu/:codigoID/:nome', (req, res) => {
    const valor = req.params;
    res.send(valor);
});

//http://localhost:8080/blog
app.get('/blog/:codigo?', (req, res) => {
    const valor = req.params;
    if(valor.codigo) //existe
    {}
    res.send(valor);
});
//http://localhost:8080/pagina?nome=Exemplo
app.get('/pagina', (req, res) => {
    const valor = req.query;
    res.send(valor["nome"]);
})

const port = 8080;
app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080");
});