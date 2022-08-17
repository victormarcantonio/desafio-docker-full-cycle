const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)
const sql = `INSERT INTO people (name) values ('VICTOR')`
connection.query(sql)
const select = `SELECT * from people`

app.get('/', (req, res)=> {
    connection.query('SELECT * FROM people', (err, response) => {
        res.send(`<h1>Full Cycle Rocks!</h1> <br> <h2>${response.map(user => `<br>${user.name}`)}</h2>`)});
    connection.end()
})



app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})