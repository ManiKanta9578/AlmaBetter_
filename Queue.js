class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        this.items.shift();
    }
    front(){
        return this.items[0];
    }
    isEmpty(){
        if(this.items.length>0){
            return false;
        }else{
            return true;
        }
    }
}
let q =new Queue();
q.enqueue(2);
q.enqueue(4);
q.enqueue(6);
console.log(q.items);
q.dequeue();
console.log(q.items);
console.log(q.front());
console.log(q.isEmpty());