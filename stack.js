const Node = require('./node');


class Stack{
    constructor(){
        this.first = null;
        this.top = null;
        this.size = 0;
    }


    listEmpty(){
        return this.top == null;
    }

    Size(){
        return this.size;
    }

    peek(){
        return this.top;
    }

    push(code, description, und, price, subtotal){
        let newNode = new Node(code, description, und, price, subtotal);

        if(this.listEmpty()){
            this.first = newNode;
            this.top = newNode;

        }else{
            // Pointer next the element end => newNode
            this.top.next = newNode;
            //Pointer end => new element
            this.top = newNode;
        }

        this.size++;

    }

    pop(){
        if(this.listEmpty()){
            console.log('error you cant´n delete an element in an empty list');
        }else if(this.first == this.top){
            this.first = null;
            this.top = null;
            this.size--;
        }else{
            //Delete end element in list
            let aux = this.first;
            while(aux.next != this.top){
                aux = aux.next;
                
            }

            aux.next = this.top.next;
            this.top = aux;
            this.size--;
        }
    }

    show(){
        let aux = this.first;

        let total = 0;
        console.log(`   CODE |          DESCRIPTION        | UND | PRICE | SUBTOTAL\n`);

        while(aux){

            
           console.log(` ${aux.code} | ${aux.description} | ${aux.und} | ${aux.price} |  ${aux.price * aux.und}`);

           total += aux.price * aux.und;

           aux = aux.next;
        }

        console.log('** Total bill **\n', total);


       
    }


}

module.exports = Stack;
