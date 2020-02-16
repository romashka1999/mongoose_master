
const requestHandler = async (req, res, callback) => {
    try {
        const response =  await callback(req);
        const statusCode = getStatusCodeWithAction(response.action);
        res.status(statusCode).send(response.data);
    } catch (error) {
        const statusCode = getStatusCodeWithAction(error.action);
        res.status(statusCode).send(error);
    }
};

const getStatusCodeWithAction = (action) => {
    const actionStatusCodes = {
        'OK': 200,
        'CREATED': 201,
        'ACCEPTED': 202,
        'BAD_REQUEST': 400,
        'UNAUTHORIZED': 401,
        'NOT_FOUND': 404
    }

    return actionStatusCodes[action] ? actionStatusCodes[action] : 500;
}

module.exports = {
    requestHandler
}





