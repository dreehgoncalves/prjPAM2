const exp = require("express");
const srv = exp();

const bodyParser = require("body-parser");
srv.use(bodyParser.urlencoded({ extended: false }));
srv.use(bodyParser.json());

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}
srv.use(cors(corsOptions));

const mysql = require("mysql2");
const banco = mysql.createPool({
    host: "localhost",
    database: "3j_210915",
    user: "root",
    password: ""
});

srv.get("/conectar", (req, res) => {
    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: "Erro ao conectar",
                detalhes: erro
            });
        }

        return res.status(200).send({
            mensagem: "Conectado com sucesso!"
        });
    });
});

srv.delete("/delveiculo/modelo/:modelo/preco/:preco", (req, res) => {
    const modelo = req.params.modelo;
    const preco = req.params.preco;
    const SQL = `DELETE FROM veiculos WHERE modelo LIKE '%${modelo}%' AND preco_venda >= ${preco}`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: 'Erro na conexão',
                detalhes: erro
            });
        }

        con.query(SQL, (erro, resultado) => {
            con.release();
            if(erro){
                return res.status(500).send({
                    mensagem: 'Erro de SQL',
                    detalhes: erro
                });
            }

            if(resultado.affectedRows > 1){
                return res.status(200).send({
                    mensagem: 'Veículos excluídos com sucesso!'
                });
            }else if(resultado.affectedRows > 0){
                return res.status(200).send({
                    mensagem: 'Veículo excluído com sucesso!'
                });
            }else{
                return res.status(200).send({
                    mensagem: 'Veículo não localizado no banco de dados.'
                });
            }
        });
    });
});

srv.delete("/delveiculo/pormarca/:marca", (req, res) => {
    const marca = req.params.marca;
    const SQL = `DELETE FROM veiculos WHERE marca LIKE '%${marca}%'`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: 'Erro na conexão',
                detalhes: erro
            });
        }

        con.query(SQL, (erro, resultado) => {
            con.release();
            if(erro){
                return res.status(500).send({
                    mensagem: 'Erro de SQL',
                    detalhes: erro
                });
            }

            if(resultado.affectedRows > 1){
                return res.status(200).send({
                    mensagem: 'Veículos excluídos com sucesso!'
                });
            }else if(resultado.affectedRows > 0){
                return res.status(200).send({
                    mensagem: 'Veículo excluído com sucesso!'
                });
            }else{
                return res.status(200).send({
                    mensagem: 'Veículo não localizado no banco de dados.'
                });
            }
        });
    });
});

srv.delete("/delveiculo/porid/:id", (req, res) => {
    const id = req.params.id;
    const SQL = `DELETE FROM veiculos WHERE id = ${id}`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: 'Erro na conexão',
                detalhes: erro
            });
        }

        con.query(SQL, (erro, resultado) => {
            con.release();
            if(erro){
                return res.status(500).send({
                    mensagem: 'Erro de SQL',
                    detalhes: erro
                });
            }

            if(resultado.affectedRows > 0){
                return res.status(200).send({
                    mensagem: 'Veículo excluído com sucesso!'
                });
            }else{
                return res.status(200).send({
                    mensagem: 'Veículo não localizado no banco de dados.'
                });
            }
        });
    });
});

srv.patch("/editveiculo/:id", (req, res) => {
    const id = req.params.id;
    const v = req.body;
    const SQL = `UPDATE veiculos SET marca = '${v.marca}', modelo = '${v.modelo}', preco_venda = ${v.preco_venda}, proprietario = '${v.proprietario}' WHERE id = ${id}`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: "Erro ao conectar",
                detalhes: erro
            });
        }

        con.query(SQL, (erro, resultados) => {
            con.release();

            if(erro){
                return res.status(500).send({
                    erro: 'Erro na consulta',
                    detalhes: erro
                });
            }

            return res.status(200).send({
                data: resultados
            });
        });
    });
});

srv.get("/porvalormaiorouigual/:valor", (req, res) => {
    const valor = req.params.valor;
    const SQL = `SELECT * FROM veiculos WHERE preco_venda >= ${valor} ORDER BY preco_venda`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: "Erro ao conectar",
                detalhes: erro
            });
        }

        con.query(SQL, (erro, resultados) => {
            con.release();

            if(erro){
                return res.status(500).send({
                    erro: 'Erro na consulta',
                    detalhes: erro
                });
            }

            return res.status(200).send({
                data: resultados
            });
        });
    });
});

srv.get("/porproprietario/:proprietario", (req, res) => {
    const proprietario = req.params.proprietario;
    const SQL = `SELECT * FROM veiculos WHERE proprietario LIKE '%${proprietario}%' ORDER BY proprietario`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: "Erro ao conectar",
                detalhes: erro
            });
        }

        con.query(SQL, (erro, resultados) => {
            con.release();

            if(erro){
                return res.status(500).send({
                    erro: 'Erro na consulta',
                    detalhes: erro
                });
            }

            return res.status(200).send({
                data: resultados
            });
        });
    });
});

srv.get("/pormarca/:marca", (req, res) => {
    const marca = req.params.marca;
    const SQL = `SELECT * FROM veiculos WHERE marca LIKE '%${marca}%' ORDER BY modelo`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: "Erro ao conectar",
                detalhes: erro
            });
        }

        con.query(SQL, (erro, resultados) => {
            con.release();

            if(erro){
                return res.status(500).send({
                    erro: 'Erro na consulta',
                    detalhes: erro
                });
            }

            return res.status(200).send({
                data: resultados
            });
        });
    });
});

srv.get("/veiculos", (req, res) => {
    const SQL = `SELECT * FROM veiculos ORDER BY marca`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: "Erro ao conectar",
                detalhes: erro
            });
        }

        con.query(SQL, (erro, resultados) => {
            con.release();

            if(erro){
                return res.status(500).send({
                    erro: 'Erro na consulta',
                    detalhes: erro
                });
            }

            return res.status(200).send({
                data: resultados
            });
        });
    });
});

srv.post("/cadveiculo", (req, res) => {
    const dados = req.body;
    const query = `INSERT INTO veiculos(marca, modelo, preco_venda, proprietario) VALUES ('${dados.marca}', '${dados.modelo}', ${dados.preco_venda}, '${dados.proprietario}')`;

    banco.getConnection((erro, con) => {
        if(erro){
            return res.status(500).send({
                mensagem: 'Erro na conexão com o banco de dados',
                detalhes: erro
            });
        }

        con.query(query, (erro, resultado) => {
            con.release();

            if(erro){
                return res.status(500).send({
                    mensagem: "Erro na query",
                    detalhes: erro
                });
            }

            return res.status(200).send({
                mensagem: "Veículo cadastrado com sucesso!"
            });
        });
    });
});

srv.listen(3000, () => {
    console.log("Servidor funcionando!");
});

