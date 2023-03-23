const db = require("../../../Models/index");
const bcrypt = require("bcrypt")
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');
const SignToken = require("../../../Util/SignToken")


exports.USER_SIGNIN = {
  async login(parent, args) {
    const { email, password } = args || {}
    if (!email || !password) {
      throw new GraphQLError('Missing name and password field.', {
        extensions: {
          code: 'BAD_USER_INPUT',
        },
      });
    }
    const user = await db.user.findOne({ where: { email: email } })
    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = SignToken(user.email)
      return {token}
    }
    else {
      throw new GraphQLError('Check email and password.', {
        extensions: {
          code: 'FORBIDDEN',
        },
      });
    }
  }
}

