const {add, execute} = require ('./note')

describe(`note functions`, () => {
    it('adds note', () => {
        const action = {
            type: 'add',
            payload: 'note'
        }
        const note = add(action);

        expect(note).toEqual({
            id:expect.any(Number),
            text: 'note'
        })
    })

    it('adds a not and console logs', () => {
        console.log = jest.fn();

        const action = {
            type: 'add',
            payload: 'note'
        }

        const note = add(action);

        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith(`Note Added: ${note.text}`);
    })

    it('executes upon an action', () => {
        const action = {
            type:'add',
            payload: 'note'
        }

        const note = execute(action);

        expect(note).toEqual({
            id: expect.any(Number),
            text: 'note'
        })
    })

    it('does nothing when action is not legal', () => {
        const action = {
            type: 'badAction',
            payload: 'note'
        };

        const result = execute(action);

        expect(result).toBeUndefined();
    })
})