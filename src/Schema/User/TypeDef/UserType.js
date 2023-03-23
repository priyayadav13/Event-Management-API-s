const { gql } = require('apollo-server');

const typeDefs = gql`
 directive @auth on FIELD_DEFINITION
type User{
  id: ID!
  name: String!
  email: String!
  password: String!
  gender: [Gender]
  token:String
  events: [Event!]!
}
enum Gender {
MALE
FEMALE
}

type Query {
  users: [User] @auth
  findUser(id: ID): User
}

input AddUserInput{
  name: String!
  email: String!
  password: String!
  gender: Gender
}

type Mutation {
  addUser(input:AddUserInput): User
  login(email: String, password: String):User
  updateName(name:String, token: String):User @auth
  changePassword(currentPassword: String!, newPassword: String!, token: String!): User @auth
  requestPasswordReset(email: String!): String
  resetPassword(otp: String!, newPassword: String!, token: String): User
  updatePassword(token: String, password: String): User @auth
}
`
module.exports = typeDefs;