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
// //valid functions 
// const valid = (action) => {
//    return action.type === 'add' && action.payload;
// }
// // parse functions if true --> at that key:value pair 

// const parse = (arr) => {
//    const obj = minimist(arr);
//    delete obj._;

//    const [[type, payload]] = Object.entries(obj);

//    return {
//        type,
//        payload
//    }
// }

// module.exports = {
//     valid,
//     parse
// }
