const Input = require('./lib/Input.js');
const Note = require('./lib/Note.js');

const input = new Input();
const note = new Note();

const action = input.parse(process.argv);

input.valid(action)? note.execute(action): console.log('')

const isValid = input.valid(action);

if(isValid) note.execute(action);
else console.logZ('invalid command')