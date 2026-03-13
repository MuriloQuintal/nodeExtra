

const estados = [
  "11 - Rondônia - RO",
  "12 - Acre - AC",
  "13 - Amazonas - AM",
  "14 - Roraima - RR",
  "15 - Pará - PA",
  "16 - Amapá - AP",
  "17 - Tocantins - TO",
  "21 - Maranhão - MA",
  "22 - Piauí - PI",
  "23 - Ceará - CE",
  "24 - Rio Grande do Norte - RN",
  "25 - Paraíba - PB",
  "26 - Pernambuco - PE",
  "27 - Alagoas - AL",
  "28 - Sergipe - SE",
  "29 - Bahia - BA",
  "31 - Minas Gerais - MG",
  "32 - Espírito Santo - ES",
  "33 - Rio de Janeiro - RJ",
  "35 - São Paulo - SP",
  "41 - Paraná - PR",
  "42 - Santa Catarina - SC",
  "43 - Rio Grande do Sul - RS",
  "50 - Mato Grosso do Sul - MS",
  "51 - Mato Grosso - MT",
  "52 - Goiás - GO",
  "53 - Distrito Federal - DF"
]

let estadosFormatados = ""
estados.forEach(estado => {
    estadosFormatados += estado + "\n"
})

// for (let index = 0; index < array.length; index++) {
    
// }


fs.writeFile('estados.txt', estadosFormatados, erro=>{
    if(erro){
        console.log("algo deu errado")
        return
    }
})
novoCliente = 'Regina George'
fs.appendFile('clientes.txt', novoCliente, erro => {
    if (erro) {
        console.erro(erro)
        return
    }
    console.log("+ 1 cliente!")
})

console.log(estados.length)
let i = 0;
while (i<estados.length){
    console.log(i++)
};














let novoCliente = 'João da Silva\n'
fs.writeFile('clientes.txt', novoCliente, erro => {
    if (erro) {
        console.erro(erro)
        return
    }
    console.log("Novo Cliente")
})




const fs = require('fs')


novoCliente = 'Regina George \n'
fs.appendFile('clientes.txt', novoCliente, erro => {
    if (erro) {
        console.erro(erro)
        return
    }
    console.log("+ 1 cliente!")
})

fs.readFile('clientes.txt', 'utf8', (erro, dados) => {
    if(erro) {
        console.error(erro)
        return
    }
    console.log(dados)
})
console.log("Bem Vindo")







