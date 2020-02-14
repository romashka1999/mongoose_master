const pagination = (page, pageSize) => {
    const skip = page * pageSize;
    const limit = pageSize;
    return {
        skip,
        limit
    }
}

module.exports = {
    pagination
}