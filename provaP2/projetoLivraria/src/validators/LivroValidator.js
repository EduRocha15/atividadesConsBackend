const yup = require('yup')

const livroSchema = yup.object().shape({
  titulo: yup
    .string("Por favor, insira o nome do livro.")
    .required("Campo obrigatório!"),

  autor: yup
    .string("Por favor, insira o autor/a deste livro.")
    .required("Campo obrigatório!"),

  preco: yup
    .number("Insira o valor do livro.")
    .required("Campo obrigatório!"),

  editora: yup
    .string("Por favor, insira a editora do livro.")
    .required("Campo obrigatório!")
})

function livroValidator (req, res, next) {
  livroSchema
    .validate(req.body, {abortEarly: false})
    .then(() => next())
    .catch(err => {
      const erros = err.inner.map( e => {
        const erro = {
          campo: e.path,
          erros: e.erros
        }
        return erro
      })
      res.status(400).json(
        {
          mensagem: "Erro na validação dos campos.",
          erros
        }
      )
    })
}

module.exports = { livroValidator }