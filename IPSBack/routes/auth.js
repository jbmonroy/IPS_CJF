const express = require('express')
const router = express.Router()
const { loginCtrl, registerCtrl } = require('../controllers/auth')
const { validatorLogin, validatorRegister } = require('../validators/auth')
const { checkRole } = require('../middleware/role')
const { authMiddleware } = require('../middleware/session')

router.post('/log-in', validatorLogin, loginCtrl)
router.post('/crypt-pass', authMiddleware, checkRole(['admin']),validatorRegister, registerCtrl)

module.exports = router