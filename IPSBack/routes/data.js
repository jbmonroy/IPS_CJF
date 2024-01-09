const express = require('express')
const router = express.Router()
const { authMiddleware } = require('../middleware/session')
const { checkRole } = require('../middleware/role')
const { getData, getItem } = require('../controllers/data')
const { getItemValidator } = require('../validators/data')

router.get('/', authMiddleware, checkRole(['admin','user']), getData)
router.get('/filter/:param',authMiddleware,checkRole(['admin','user']), getItemValidator, getItem)

module.exports = router 