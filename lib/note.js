const add = action => {
    const note = {
        id: Date.now(),
        text: action.payload
    };

    console.log(`Note Added: ${note.text}`)

    return note;
}

const execute = action => {
    switch(action.type) {
        case 'add': 
            return add(action);
        default:
            return;
    }
}

module.exports = {
    execute,
    add
}