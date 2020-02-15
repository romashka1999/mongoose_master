
const requestHandler = async (res, callback) => {
    try {
        const response =  await callback(req);
        const statusCode = getStatusCodeWithAction(response.action);
        res.status(statusCode).send(response.data);
    } catch (error) {
        const statusCode = getStatusCodeWithAction(error.action);
        res.status(statusCode).send(error.data);
    }
};

const getStatusCodeWithAction = (action) => {
    const actionStatusCodes = {
        'OK': 200,
        'CREATED': 201,
        'BAD_REQUEST': 400
    }

    return actionStatusCodes[action] ? actionStatusCodes[action] : 500;
}

module.exports = {
    requestHandler
}





