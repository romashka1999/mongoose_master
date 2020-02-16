const { verifyToken } = require('../helpers/token');
const { getUserById } = require('../services/user.service');

const auth = async (req, res, next) => {
    const bareerToken = req.header.Authorization;
    const token = bareerToken.split(' ')[1];
    const decoded = verifyToken(token);
    decoded.params.id = decoded.id;
    const user = getUserById(decoded);
    if(user) {
        res.locals.user = decoded;
        next();
    } else {
        res.status(401).send('pashol naxui :D');
    }
}

module.exports = {
    auth
}