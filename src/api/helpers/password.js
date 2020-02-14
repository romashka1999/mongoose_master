const { compare, genSalt, hash } = require('bcrypt');

const checkPassword = async (password, hashedPassword) => {
    const passIsValid = await compare(password, hashedPassword);
    return passIsValid;
}

const hashPassword = async (password) => {
    const saltRounds = 10;
    const salt = await genSalt(saltRounds);
    const hashedPassword = await hash(password, salt);
    return hashedPassword;
}

module.exports = {
    checkPassword,
    hashPassword
}