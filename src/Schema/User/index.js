const {USER_LIST} = require("./Queries/UserList")
const {USER_SIGNUP} =require("./Mutation/RegisterUser")
const {USER_SIGNIN} = require("./Mutation/LoginUser")
const {USER_UPDATE} = require("./Mutation/UpdateUser");
const { CHANGE_PASSWORD } = require("./Mutation/ChangePassword");
const {UPDATE_PASSWORD}= require("./Mutation/UpdatePassword") 
const {RESET_PASSWORD} = require("./Mutation/ResetPassword")
const {REQUEST_PASSWORD_REST} = require("./Mutation/RequestPasswordReset")


const resolvers = {
  Query: {
    users: USER_LIST.users,
    findUser: USER_LIST.findUser,
  },
  Mutation:{
    //Insert,Update and Delete
    addUser: USER_SIGNUP.addUser,
    login:USER_SIGNIN.login,
    updateName:USER_UPDATE.updateName,
    changePassword:CHANGE_PASSWORD.changePassword,
    updatePassword:UPDATE_PASSWORD.updatePassword,
    requestPasswordReset:REQUEST_PASSWORD_REST.requestPasswordReset,
    resetPassword: RESET_PASSWORD.resetPassword
  },
};

module.exports = resolvers
