const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const getItemValidator = [
    check('param').exists().notEmpty(),
    (req, res, next) => validateResults(req, res, next)
]

module.exports = {
    getItemValidator
}