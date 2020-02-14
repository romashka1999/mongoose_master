class BaseResponseBuilder {

    constructor(data, action) {
        this.data = data;
        this.action = action;
    }
}

class SuccessBuilder extends BaseResponseBuilder {

    constructor(data, action) {
        super(data, action);
    }
}

class ErrorBuilder extends BaseResponseBuilder {
     
    constructor(data, action, type) {
        super(data, action);
        this.type = type;
    }
}

module.exports = {
    SuccessBuilder,
    ErrorBuilder
}