const bcrypt = require('bcrypt');
const { PASSWORD_SERCRET } = require('../../config');

const checkPassword = async (password) => {
    const passIsValid = await bcrypt.compare(password, PASSWORD_SERCRET, 8);
    return passIsValid;
}

const hashPassword = async (password) => {
    const hash = await bcrypt.compare(password, PASSWORD_SERCRET, 8);
    return passIsValid;
}
