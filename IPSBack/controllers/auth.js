const { encrypt, compare } = require('../utils/handlePassword');
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')
const { tokenSign } = require('../utils/handleJwt')

const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const data = { password }
        res.send({ data })

    } catch (e) {
        handleHttpError(res, 'ERROR_REGISTER')
    }
}
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await [
            {
                email: 'bobadillamonroy27@gmail.com',
                password: '$2a$10$FRZxaIJ6fF/A1//hZzI./uErxn/1Hv3mr03HM.sDPaztYVhgH0rNe',
                rol: ['admin']
            },
            {
                email: 'agalindo851010@gmail.com',
                password: '$2a$10$rd8F5aZDjAeNY5A.n7aNR.JKZWuG9snUudHUS5R3BdsDgJtGEx5im',
                rol: ['user']
            }
        ].filter((data) => data.email === req.email)
        if (user.length === 0) {
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }
        const hashPassword = user[0].password
        const check = await compare(req.password, hashPassword)
        if (!check) {
            handleHttpError(res, "BAD_CREDENTIALS", 401)
            return
        }
        const data = {
            token: await tokenSign({ email: user[0].email, rol: user[0].rol }),
            email: user[0].email
        }
        res.send({ data })
    } catch (e) {
        handleHttpError(res, 'ERROR_LOGIN_USER')
    }
}

module.exports = {
    registerCtrl,
    loginCtrl
}