const Node = require('./node');
const Stack = require('./stack');
const prompt = require('prompt-sync')();

/*
Stack
*/

const invoice = new Stack();

invoice.push(100013, 'BORAX AL 48% BULTO X 50 KGS', 2, 5000);
invoice.push(100015, 'OXIMAG AL 88% BULTO X 50 KGS', 1, 6000);
invoice.push(100022, 'MIRRAPEL POLVO X 300 GRS', 3, 15000);

invoice.show();


/*Menu*/

while(true){

    console.log(`\nMenu:\n 1. insert other product\n 2. Modified last inserted product  \n 3. Finalize  \n 4. Exit `);

   
    let option = prompt('Type option: ');

    if(option == 1){
        
        let code = prompt('Type code product: ');
        let description = prompt('Type description product: ');
        let und = prompt('Type units product: ');
        let price = prompt('Type price product: ');
        
        invoice.push(code, description, und, price );
    }
    
    if(option == 2){
        
        invoice.pop();

        console.log('type new values for invoice')

        let code = prompt('Type code product: ');
        let description = prompt('Type description product: ');
        let und = prompt('Type units product: ');
        let price = prompt('Type price product: ');
        
        invoice.push(code, description, und, price );

    }

    if(option == 3){
        
        console.log('\n** Result Invoice ** \n');
        invoice.show();
        
    }

    if(option == 4){
           
        break;
    }

    
}
