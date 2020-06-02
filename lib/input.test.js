const { valid, parse } = require ('./input');

describe('input functions', () => {
    it ('can parse command line args', () => {
        const commandLineArgs = ['node', 'index.js', '--add', 'note'];
        const action = parse(commandLineArgs);
    
        expect(action).toEqual({
            type: 'add',
            payload: 'note'
        })
    });

    it('can validate command line args with add', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        }
    const isValid = valid(action);

    expect(isValid).toBeTruthy();
    })

    it('validates command line args that are not good', () => {
        const action = {
            type: 'bad',
            payload: 'note'
        };
        const isNotValid = valid(action);
        expect(isNotValid).toBeFalsy();
    })
})