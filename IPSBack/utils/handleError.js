const handleHttpError = (res, message = 'BAD_REQUEST', code = 403) => {
    res.status(code)
    res.send({ error: message })
}
module.exports = { handleHttpError }