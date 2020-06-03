const input = require('./lib/Input.js');
const Note = require('./lib/models/Note.js');
const action = input.parse(process.argv);
input.valid(action)? Note.execute(action): console.log('')
const isValid = input.valid(action);
if(isValid) note.execute(action);
else console.log('invalid command')
