const { sign, verify } = require('jsonwebtoken');
const { JWT_SERCRET } = require('../../config')

const generateToken = async(payload) => {
    const token = await sign(payload, JWT_SERCRET);
    return token;
}

const verifyToken = async (token) => {
    try {
        const decoded = await verify(token, JWT_SERCRET);
        return decoded;
    } catch(err) {
        console.log('err');
    }
}

module.exports = {
    generateToken,
    verifyToken
}