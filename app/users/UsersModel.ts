export class User {

    // Attributes
    private id: Number = 0;
    private firstName: String = '';
    private lastName: String = '';
    private email: String = '';
    private password: String = '';
    private permissionLevel: Number = 1;

    constructor (
        userId: Number,
        userName: String,
        userLastName: String,
        userEmail: String,
        userPassword: String,
        userPermissionLevel: Number 
    ) {
        this.id = userId;
        this.firstName = userName;
        this.lastName = userLastName;
        this.email = userEmail;
        this.password = userPassword;
        this.permissionLevel = userPermissionLevel;
    }
}