const { handleHttpError } = require('../utils/handleError')
const { verifyToken } = require('../utils/handleJwt')

const authMiddleware = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            handleHttpError(res, 'NEED_SESSION', 401)
            return
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verifyToken(token);
        if (!dataToken) {
            handleHttpError(res, 'NOT_PAYLOAD_DATA', 401)
            return
        }
        req.user = dataToken
        next()
    } catch (e) {
        handleHttpError(res, 'ERROR_AUTH')
    }
}

module.exports = { authMiddleware }