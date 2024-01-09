const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

const validatorRegister = [
    check('password').exists().notEmpty().isLength({ min: 4, max: 15 }),
    (req, res, next) => validateResults(req, res, next)
]

const validatorLogin = [
    check('password').exists().notEmpty().isLength({ min: 4, max: 15 }),
    check('email').exists().notEmpty().isEmail(),
    (req, res, next) => validateResults(req, res, next)
]

module.exports = {
    validatorRegister,
    validatorLogin
}