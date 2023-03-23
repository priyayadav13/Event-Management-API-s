const jwt = require('jsonwebtoken');
const {user} = require("../../src/Models")

async function signToken(email) {
  const userinfo = await user.findOne({where: {email}})
const token = jwt.sign(
  {
    id: userinfo.id,
    email: userinfo.email
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "2d",
  }
);
console.log(token)
return token
}

module.exports = signToken