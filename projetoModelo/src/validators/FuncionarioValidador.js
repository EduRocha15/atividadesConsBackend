const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
            .string("Campo precisa ser um texto")
            .required("Campo é obrigatório"),

        cpf: yup
            .string("Campo precisa ser um texto")
            .required("Campo é obrigatorio"),
            
        email: yup
            .string("Campo precisa ser um texto")
            .email("E-mail inválido")
            .required("Campo é obrigatorio"),

        telefone: yup
            .string("Campo precisa ser um texto")
            .required("Campo é obrigatorio"),

        dataContratacao: yup
            .date("Data inválida")
            .required("Campo é obrigatorio"),

        dataNascimento: yup
            .date("Data inválida")
            .required("Campo é obrigatorio"),

        genero: yup
            .string("Campo precisa ser um texto")
            .required("Campo é obrigatorio"),

        endereco: yup
            .string("Campo precisa ser um texto")
            .required("Campo é obrigatorio"),

        cargo: yup
            .string("Campo é obrigatorio"),

        deepartamento: yup
            .string("Campo é obrigatorio"),
    }
)

function funcionarioValidador(req, res, next) {
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

module.exports = {funcionarioValidador}