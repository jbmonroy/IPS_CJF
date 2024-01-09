const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET;

const tokenSign = async (user) => {
    const sing = jwt.sign(
        {
            email: user.email,
            rol: user.rol
        },
        JWT_SECRET,
        {
            expiresIn: '2h'
        }
    )
    return sing
}

const verifyToken = async (tokenJwt) => {
    try {
        return jwt.verify(tokenJwt, JWT_SECRET)
    } catch (e) {
        return null
    }
}

module.exports = {
    tokenSign,
    verifyToken
}