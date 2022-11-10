class Stack {
    constructor(){
        this.items = [];
    }
    add(element){
        this.items.push(element)
    }
    size(){
        return this.items.length;
    }
    remove(){
        return this.items.pop();
    }
    peek(){
        let lastIndex = this.items.length-1;
        return this.items[lastIndex];
    }
}
let st1 = new Stack();
st1.add(7);
st1.add(14);
st1.add(1);
st1.add(28);
st1.add(30);
console.log(st1.items);
// console.log(st1.size());
st1.remove();
console.log(st1.items);
st1.remove();
console.log(st1.items);
console.log(st1.size());
console.log(st1.peek());