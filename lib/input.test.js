const Input = require('./Input')

describe('input functions', () => {
    //parse test 
    it ('can parse command line args', () => {
        const commandLineArgs = ['node', 'index.js', '--add', 'note'];
        const input = new Input();

        expect(input.parse(commandLineArgs)).toEqual({
            type: 'add',
            payload: 'note'
        });
    });


    //valid test 1
    it('can validate command line args with add', () => {
        const action = {
            type: 'add',
            payload: 'my note'
        }
        const input = new Input();
        const result = input.valid(action)
        expect(result).toBeTruthy();
    })

    //valid test 2
    it('validates command line args that are not good', () => {
        const action = {
            type: 'bad',
            payload: 'note'
        };

        const input = new Input();
        const isNotValid = input.valid(action);
        expect(isNotValid).toBeFalsy();
    })
})