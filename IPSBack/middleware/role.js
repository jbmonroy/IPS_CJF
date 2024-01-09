const { handleHttpError } = require('../utils/handleError')


const checkRole = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const hasPermissions = roles.some(role=>user.rol.includes(role));

        if (!hasPermissions) {
            handleHttpError(res, 'NOT_PERMISSIONS', 403)
            return
        }
        next();

    } catch (e) {
        handleHttpError(res, 'ERROR_PERMISSIONS', 403)
    }
}

module.exports = { checkRole }