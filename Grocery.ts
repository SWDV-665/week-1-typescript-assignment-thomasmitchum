/*
Create a file called grocery.ts. It should have a definition of a class with the obvious name Grocery. 
The class should have some basic attributes such as name, quantity, etc. Feel free to add any other 
attributes you think will be necessary.

Add few grocery items to an array of groceries, such as milk, bread, and eggs, along with some 
quantities (i.e. 3, 6, 11).  Display these grocery items as HTML output.

The output of this assignment will be grocery.ts and groceries.html displaying the output.
*/

// create Grocery Class class

class Grocery {

    name: string;
    price: number;
    quantity: number;


    constructor(name: string, price: number, quantity: number){
        this.name = name;
        this.price = price;
        this.quantity = quantity;

    }

    public getItemDescription(): string{
        return `Name: ${this.name} Price:$ ${this.price} Quantity: ${this.quantity} `;
    }
}

let pineapple = new Grocery('Pineapple', 5.50, 3);
let steak = new Grocery('Steak', 10.99, 2);
let eggs = new Grocery('Eggs', 2.99, 2);
document.body.textContent = pineapple.getItemDescription() + steak.getItemDescription() + eggs.getItemDescription();
