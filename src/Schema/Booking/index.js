const {INVITE_USER} = require("./InviteUser")

const resolvers = {
  Query: {
  },
  Mutation:{
    //Insert,Update and Delete
    inviteUser: INVITE_USER.inviteUser,
  },
};

module.exports = resolvers
