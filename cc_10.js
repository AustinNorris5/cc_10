//Task 1: Creating a Product Class

//Create a class Product with properties
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    };

//Add a method getDetails() that returns a formatted string of product details
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    };

//Add a method updateStock(quantity) that modifies the stock level when an order is placed
    updateStock(quantity) {
        if (quantity > this.stock) {
            console.log("Insufficient stock available.");
            return;
        };
        this.stock -=quantity;
    };
};

//Test Cases
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
prod1.updateStock(3);
console.log(prod1.getDetails()); 