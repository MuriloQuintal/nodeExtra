const { errorMonitor } = require('events')
const fs = require('fs')

let novoCliente = 'Juca Bala \n'
try {
    const dados = fs.writeFileSync('Clientes.txt', novoCliente)
    console.log("Novo Cliente!")
    } catch (erro) {
        console.erro("Erro Aqui ::::::" + erro)
    }


novoCliente = 'Zé Rico \n'
try {
    const dados = fs.appendFileSync('clientes.txt', novoCliente)
    console.log("+1 cliente!")

}catch (erro) {
    console.error("erro ::::;"+erro)
}


const dados = fs.readFileSync('clientes.txt', 'utf8')
console.log(dados)
console.log("bem vindo")


// const fs = require('fs')
// const dados = fs.readFileSync('times_serieA_2026_tecnicos.csv', 'utf8')
// console.log(dados)
// console.log("bem vindo")