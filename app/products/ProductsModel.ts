export class Product {
    
    // Atributes
    private id: Number = 0;
    private name: String = '';
    private description: String = '';
    private price: Number = 0;

    constructor (
        productId: Number,
        productName: String,
        productDescription: String,
        productPrice: Number
    ) {
        this.id = productId;
        this.name = productName;
        this.description = productDescription;
        this.price = productPrice
    }
}