const db = require("../../../Models/index");
const bcrypt =require("bcrypt")
const { GraphQLError }= require('graphql');
exports.USER_SIGNUP = {
    async addUser(parent,args) {
      const {name, email, gender, password} = args.input || {}
      if (!name) {
        throw new GraphQLError('Missing name field.', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });
      }
      console.log(name)
        console.log(await db.user.findOne({where:{ email:email }}))
        const user = await db.user.findOne({where:{ email:email }})
        if (user) {
          throw new GraphQLError('Already Registered.', {
            extensions: {
              code: 'FORBIDDEN',
            },
          });
        }
        const hashpassword = await bcrypt.hash(password,12);
        const data = db.user.create({name, email, gender, password:hashpassword});
        return data
      }
}

