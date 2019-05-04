const userSample = require('./UsersSample').usersSample;
const crypto = require('crypto');

export class UsersService {

    public users: any = userSample;

    configTypeDefs() {
        let typeDefs = `
          type User {
            id: Int,
            firstName: String,
            lastName: String,
            email: String
            password: String,
            permissionLevel: Int
          }
        `;
        typeDefs += ` 
          extend type Query {
            users: [User]
          }
        `;

        typeDefs += `
          extend type Mutation {
            user(
              id:Int,
              firstName:String,
              lastName: String,
              email: String,
              password: String,
              permissionLevel: Int
            ): User!
          }
        `; 
        return typeDefs;
    }

    configResolvers(resolvers: any) {
        resolvers.Query.users = () => {
            return this.users;
        };
        resolvers.Mutation.user = (_: any, user: any) => {
            let salt = crypto.randomBytes(16).toString('base64');
            let hash = crypto.createHmac('sha512', salt).update(user.password).digest("base64");
            user.password = hash;
            this.users.push(user);
            return user;
        };
    }
}