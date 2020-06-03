minimist = require('minimist');

class Input {
    constructor (arr) {
        this.arr = arr
    }

    valid (action) {
        return action.type === 'add' && action.payload;
    }

    parse (arr) {
        const obj = minimist(arr);

        delete obj._;
     
        const [[type, payload]] = Object.entries(obj);
     
        return {
            type,
            payload
        }
     }
}

module.exports = Input;

