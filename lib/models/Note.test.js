const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./Note');

const mongodb = new MongoMemoryServer();

describe('Note Model', () => {
    beforeAll(() => {
        return mongodb.getUri()
        .then (uri => mongoose.connect(uri, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }));
    });

    beforeEach(() => {
        return mongoose.connection.dropDatabase();
    });

    afterAll(() => {
        return mongoose.connection.close()
        .then(() => mongodb.stop());
    })

    it(`Can add new note`, () => {
        const action = {
            type: 'add',
            payload: 'note'
        }
        return Note.execute(action)
        .then(note => {
            expect(note.toJson().toEqual({
                id: expect.anything(),
                text: 'note'
            }))
        
        })
    })
});