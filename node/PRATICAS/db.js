const mysql = require('mysql2/promise');

class Database {
    constructor(config){
        this.connection = mysql.createConnection(config);
    }

    async connect(){
        try {
            this.connection = await mysql.createConnection(config);
            console.log('Conexão MySQL estabelecida com sucesso.');
        } catch (error) {
            console.error('Erro ao conectar ao MySQL: ', error);
        }
        // this.connection.connect((err) => {
        //     if(err){
        //         console.error('Erro ao conectar ao MySQL: ', err);
        //         return;
        //     }
        //     console.log('Conexão MySQL estabelecida com sucesso.');
        // });
    }

    async query(sql, agrs){
        try {
            const [rows] = (await this.connection).execute(sql, agrs);
            return rows;
        } catch (err) {
            throw err;
        }

        // return new Promise((resolve, reject) => {
        //     this.connection.query(sql, args, (err, rows) => {
        //         if(err)
        //             return reject(err);
        //         resolve(rows);
        //     });
        // });
    }
    close(){
        this.connection.end();
    }
}

module.exports = Database;