const Stack = require('./stack');

describe('Stack', () => {
    it('should push elements onto the stack', () =>{
        const stack = new Stack();
        stack.push(1);
        expect(stack.size).toEqual(1);
        expect(stack.top.value).toEqual(1);

        stack.push(2);
        expect(stack.size).toEqual(2);
        expect(stack.top.value).toEqual(2);
    });

    it('should pop elements off of the stack', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);

        const value1 = stack.pop();
        expect(value1).toEqual(2);
        expect(stack.size).toEqual(1);
        expect(stack.top.value).toEqual(1);

        const value2 = stack.pop();
        expect(value2).toEqual(1);
        expect(stack.size).toEqual(0);
        expect(stack.top).toEqual(null);
    });

    it('should check if the stack is empty', ()  => {
        const stack = new Stack();
        expect(stack.isEmpty()).toEqual(true);

        stack.push(1);
        expect(stack.isEmpty()).toEqual(false);
    });

    it('should handle underflow when popping from an empty stack.', () => {
        const stack = new Stack();
        const popped = stack.pop();
        expect(popped).toEqual('underflowError: can\'t pop from an empty stack.')

    });

});