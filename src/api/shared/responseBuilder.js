class BaseResponseBuilder {

    constructor(data, action) {
        this.data = data;
        this.action = action;
    }
}

class SuccessResponseBuilder extends BaseResponseBuilder {

    constructor(data, action) {
        super(data, action);
    }
}

class ErrorResponseBuilder extends BaseResponseBuilder {
     
    constructor(data, action, type) {
        super(data, action);
        this.type = type;
    }
}

module.exports = {
    SuccessResponseBuilder,
    ErrorResponseBuilder
}