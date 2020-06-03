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
        .then(notes => {
            expect(notes.toJSON()).toEqual({
                __v: 0,
                _id: expect.anything(),
                text: 'note',
            })
        
        })
    })

    it(`Get all of the notes`, async() => {
        action = {
            type: 'list',
        }
        add = {
            type: 'add',
            payload: 'note'
        }

        await Note.execute(add);

        return Note.execute(action)
        .then(notes => {
            expect(notes.map(note => note.toJSON())).toEqual([{
                _id: expect.anything(),
                text: 'note',
                __v: 0
            }]);
        });
    });
});