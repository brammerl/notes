class Note {
    constructor(action) {
        this.action = action;
    }
    add = action => {
        const note = {
            id: Date.now(),
            text: action.payload
        };
    
        console.log(`Note Added: ${note.text}`)
    
        return note;
    }

    execute = action => {
        switch(action.type) {
            case 'add': 
                return this.add(action);
            default:
                return;
        }
    }
};

module.exports = Note;
// const add = action => {
//     const note = {
//         id: Date.now(),
//         text: action.payload
//     };

//     console.log(`Note Added: ${note.text}`)

//     return note;
// }

// const execute = action => {
//     switch(action.type) {
//         case 'add': 
//             return add(action);
//         default:
//             return;
//     }
// }

// module.exports = {
//     execute,
//     add
// }