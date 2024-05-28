// Import modulo yup
const yup = require('yup')

// Criando schema
const schema = yup.object().shape(
  
  {
    titulo: yup
      .string('Campo precisa ser uma string')
      .required('Campo obrigatório'),

    descricao: yup
      .string('Campo precisa ser uma string')
      .required('Campo obrigatório'),

    data_inicio: yup
      .date('Campo data deve ser no padrão americano')
      .required('Campo obrigatório'),

    data_fim: yup
      .date('Campo data deve ser no padrao americano')
      .required('Campo obrigatório'),

    funcionario: yup
      .string('Campo obrigatório'),
    
    project: yup
      .string('Campo obrigatório'),
  }
)

function tarefaValidador(req, res, next){
  schema
    .validate(req.body, {abortEarly: false })
    .then(() => next())
    .catch (err => {
      const erros = err.inner.map (e => {
        const erro = {
          campo: e.path,
          erros: e.erros
        }
        return erro
      })

      res.status(400).json({mensagem: "falha na validação dos campos!", erros})
    })
}

module.exports = {tarefaValidador}