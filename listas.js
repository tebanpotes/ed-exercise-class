const Node= require('./node');


class ListSimple {

    //Define constructor Class

    constructor(){
        this.start = null;
        this.end = null;
        this.size = 0;
    }


    listEmpty(){
        return this.start == null;
    }

    insertStart(data){
        // console.log(data);
        // 1. Assign memory and fill the field with data
        let newNode = new Node(data);
        // Verify if list empty
        if(this.listEmpty()){
            // Insert element in list empty
            // Pointer start and end => newNode
            // console.log(this.listEmpty())
            this.start = newNode;
            this.end = newNode;
            // console.log(this.start, this.end);
            //console.log(newNode);
            
        }else{
            // Insert element in the start list   
            //the Pointer next the new element => element start
            newNode.next = this.start;
            // Pointer start => new element
            this.start = newNode;
            
            
        }   
        // Increment size list
        this.size++;
        //console.log(this.size)
    }

    insertEnd(data){
        //console.log(data)

        let newNode = new Node(data)
        if(this.listEmpty()){
            this.start = newNode;
            this.end = newNode;

        }else{
            // Pointer next the element end => newNode
            this.end.next = newNode;
            //Pointer end => new element
            this.end = newNode;
        }

        this.size++;
    
    }

    insert(data, position = null){

        let newNode = new Node(data);

        if(this.listEmpty()){

            this.start = newNode;
            this.end = newNode;
            this.size++;
        }else{

            //operation to insert element in list
            let match = false;
            // If not assign position
            if(position == null) {
                this.insertEnd(data);
                match = true;
            //Validate when position is the end element and no repeat in list
            }else{

                //Create aux to search in list and compare position and aux.data
               let aux = this.start;
                // assign position in list
                while(aux != null){

                    if(position == aux.data1){
                        newNode.next  = aux.next;
                        aux.next = newNode;
                        this.size++;
                        match = true;
                        break;
                    }
                    aux = aux.next;

                }
            }

            // if(this.end.next != null){
            //     this.end = aux;
            // }

            //validate if position is not list
            if(match == false){
                console.log("Pisition entered not is in list, Not is possible insert element\n")
            }

        }

        
    }

    show(){
        //console.log(this.start)
        let aux = this.start;
        while(aux != null){
            console.log(aux.data1);
            aux = aux.next;
        }
        console.log('');
    }

    deleteStart(){
        if(this.listEmpty()){
            console.log('error you cant´n delete an element in an empty list');
        }else if(this.start == this.end){
            this.start = null;
            this.end = null;
            this.size--;
        }else{
            //Delete start element in list
            this.start = this.start.next;
            this.size --;
        }
    }

    deleteEnd(){
        if(this.listEmpty()){
            console.log('error you cant´n delete an element in an empty list');
        }else if(this.start == this.end){
            this.start = null;
            this.end = null;
            this.size--;
        }else{
            //Delete end element in list
            let aux = this.start;
            while(aux.next != this.end){
                aux = aux.next;
                
            }

            aux.next = this.end.next;
            this.end = aux;
            this.size--;
        }
    }

    //Operation for delete element in anywhere part the list
    delete(data){
        console.log(`Value data in alone element ${this.start.data1}-${data} \n`);
        console.log(`Value this.start and this.end ${ JSON.stringify(this.start)} |||| ${ JSON.stringify(this.end)}`)
        let match = false;

        if(data === undefined){
            return console.log('Please assign at element to delete');
        }

        if(this.listEmpty()){
            console.log('Not is posibly delete element at list empty')
        }else if(this.start == this.end && this.start.data1 == data){
            
            //Verify if alone element in list
            
             this.start = null; 
             this.end = null;
             this.size--;
             match = true;
        }else if(this.start.data1 == data){

            //Verify if data belongs the first node the list

            this.deleteStart();
            match = true;

        }else {
            //Operation for delete in anywhere part of the list

            let aux = this.start;

            while (aux != null){
                if(aux.data1 == data){
                    match = true;
                    break
                }
                aux = aux.next;
            }

            if(match){
                let aux = this.start;
            
            while(aux.next.data1 != data){
                //console.log(aux.next.data1);
                aux = aux.next;
               
            }

            //Define node to delete

            let deleteNode = aux.next;

            //Second point the operation
            aux.next = deleteNode.next;

            //aux.next = aux.next.next;

            //if position node actually is penultimate node

            if(aux.next == null){
                console.log('es el penultimo nodo')
                this.end = aux;
            }

            //update size the list
            this.size--;
            match = true;
        }

            }
            
        if(match == false){
            console.error('Error: this element to delete not exists in list')
        }
    
    }
  

}


module.exports = ListSimple;

