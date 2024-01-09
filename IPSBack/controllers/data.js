const { data } = require('../core/data/data')
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')

const getData = async (req, res) => {
    try {
        res.send(data)
    } catch (e) {
        handleHttpError(res, 'ERROR_GET_DATA')
    }
}

const getItem = async (req, res) => {
    try {
        req = matchedData(req)
        const { param } = req
        const normalize = (param)=>String(param).normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        const filtered_data = data.data.filter(item => {
            return (String(item.id_sitio).toLowerCase().includes(param.toLowerCase()) || String(normalize(item.ing_cjf)).toLowerCase().includes(normalize(param).toLowerCase()) ||
            String(normalize(item.estado)).toLowerCase().includes(normalize(param).toLowerCase())  || String(normalize(item.ciudad)).toLowerCase().includes(normalize(param).toLowerCase()))
        })
        if (filtered_data.length === 0) {
            res.send({ data: [] })
            return
        }
        res.send({ data: filtered_data })
    } catch (e) {
        console.log(e);
        handleHttpError(res, 'ERROR_GET_ITEM')
    }
}

module.exports = {
    getData,
    getItem
}