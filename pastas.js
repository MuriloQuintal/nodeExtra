const fs = require('fs')
let pasta = 'fotos'

console.log("\n\n==== verificando pasta ====")
if (fs.existsSync (pasta)) {
    console.log('Tudo certo')
}else {
    console.log('A pasta não existe')
}


console.log("\n\n==== criando pasta ====")
pasta = 'icones/redes sociais/ilustra'
if(!fs.existsSync(pasta)){
    fs.mkdirSync(pasta)
    console.log("pasta criada")
}else {
    console.log("pasta já existe")
}c