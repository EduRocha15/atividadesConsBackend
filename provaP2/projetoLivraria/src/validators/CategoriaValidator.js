const yup = require('yup')

const schema = yup.object().shape({

  nome: yup
    .string("Por favor, insira o nome da categoria.")
    .required("Campo obrigatório!"),

  descricao: yup
    .string("Por favor, insira a descrição da categoria.")
    .required("Campo obrigatório!"),
})

function categoriaValidator (req, res, next) {
  schema
    .validate( req.body, { abortEarly: false })
    .then(() => next())
    .catch(err => {
      const erros = err.inner.map(e => {
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

module.exports = { categoriaValidator }