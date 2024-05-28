const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
          .string("Campo deve ser uma string")
          .required("Campo é obrigatório"),

          
        descricao: yup
        .string("Campo deve ser uma string")
        .required("Campo é obrigatório"),
    }
)

function departamentoValidador(req, res, next) {
  schema
      .validate(req.body, { abortEarly: false })
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
          {mensagem: "Falha na validação dos campos", erros}
        )
    })
}

module.exports = {departamentoValidador}