'use strict';

class Stack {
    constructor() {
        this.items = [];
    }

    get getLength() {
        return this.items.length;
    }

    typeOf(item) {
        return typeof item;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.getLength === 0) throw new Error('stack empty');

        const popped = this.items.pop();

        if (typeof popped === 'function') {
            return popped();
        }

        return this.items.pop();
    }
}

const stacky = new Stack();

stacky.push(10);
stacky.push(20);
stacky.push('20');
stacky.push({ name: 'caleb' });
stacky.push(['animal', 'cat']);
stacky.push(() => console.log('meow'));
stacky.pop();
console.log(stacky.pop());
