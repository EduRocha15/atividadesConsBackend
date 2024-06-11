const yup = require('yup')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const funcionarioSchema = yup.object().shape({
  nome: yup
    .string("Por favor, insira seu nome.")
    .required("Campo obrigatório!"),
  
  codigo: yup
    .string("Por favor, isnira seu codigo de funcionario.")
    .required("Campo obrigatório!"),

  senha: yup
    .string("Por favor, insira uma senha.")
    .required("Campo obrigatório!"),
})

function validarFuncionario (req, res, next) {
  funcionarioSchema
    .validate(req.body, {abortEarly: false})
    .then(() => next())
    .catch(err => {
      const errors = err.inner.map(e => {
        const erro = {
          campo: e.path,
          erros: e.errors
        }
        return erro
      })
      res.status(400).json({
            mensagem: "Falha na validação dos campos",
            erros: errors
        })
    })
}

const loginSchema = yup.object().shape({
  codigo: yup
    .string("Digite seu código de vendedor.")
    .required("Campo obrigatório!"),

  senha: yup
    .string("Digite sua senha cadastrada.")
    .required("Campo obrigatório"),
})

function validarLogin (req, res, next) {
  loginSchema
    .validate(req.body, {abortEarly: false})
    .then(() => next())
    .catch(err => {
      const errors = err.inner.map(e => {
        const erro = {
          campo: e.path,
          erros: e.errors
        }
        return erro
      })
      res.status(400).json({
            mensagem: "Falha na validação dos campos",
            erros: errors
        })
    })
}

function validarToken (req, res, next) {
  try {
    const authorizationHeader = rq.get('authorization')
    const separator = authorizationHeader.split(' ')
    const token = separator[1]

    jwt.verify(token, JWT_SECRET)
    next()
  } catch (error) {
      return res.status(401).json({
        mensagem: "Acesso negado!"
    })
  }
}

module.exports = {
  validarFuncionario,
  validarLogin,
  validarToken
}