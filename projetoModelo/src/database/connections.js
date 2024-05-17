// Configurando
// Importando a biblioteca mongoose
const mongoose = require('mongoose')

// Importando a biblioteca dotenv com a função config
// Ela não deve/sobe para o repositório no github
require('dotenv').config()

// Importando as variáveis de ambiente
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST
const DB_NAME = process.env.DB_NAME

// Criando a função main para ser exportada
function main(){
  mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`)
  .then(() => console.log("Conectado ao banco Mongo!"))
  .catch(err => console.log("Erro ao conectar ao banco Mongo: ", err))
}

// Export do módulo main para ser chamado la no index.js
module.exports = main