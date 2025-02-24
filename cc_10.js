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

//Test cases for task 1
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 
prod1.updateStock(3);
console.log(prod1.getDetails()); 

//Task 2: Creating an Order Class

//Create a Order class with properties
class Order {
    constructor(orderId, product, quantity) {
        product.updateStock(quantity);
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity;
    };

//Add a method getOrderDetails() that returns order details
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    };
};

//Test cases for task 2
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); 
console.log(prod1.getDetails()); 

//Task 3, Task 4, & Task 5

//Create an Inventory class
class Inventory {
    constructor() {
        this.products = [];
        this.orders = []; //Add a orders array in the Inventory class
    };

//Add methods: addProduct(product), listProducts()
    addProduct(product) {
        this.products.push(product);
    };

    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    };

//Add methods: placeOrder, listOrders()
    placeOrder(orderId, product, quantity) {
        let order = new Order(orderId, product, quantity);
        this.orders.push(order);
    };

    listOrders() {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
    };

//Add a method restockProduct(productId, quantity) in the Inventory class
    restockProduct(productId, quantity) {
        const product = this.products.find(p => p.id === productId);
        product.restock(quantity);
    };
};

//Test cases for task 3
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

//Test cases for task 4
inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());

//Test cases for task 5
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); 