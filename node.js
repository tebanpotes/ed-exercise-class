class Node {
    //Define constructor the class

    constructor(code,description, und, price , subtotal, next = null ){
        this.code = code;
        this.description = description;
        this.und = und;
        this.price = price;
        this.subtotal = subtotal;
        this.next = next;
    }
}


module.exports =Node;