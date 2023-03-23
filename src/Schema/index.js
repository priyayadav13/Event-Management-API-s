// const { mergeTypeDefs } = require('@graphql-tools/merge')
// const { mergeResolvers } = require('@graphql-tools/merge')
// const eventType = require("./Event/TypeDef/EventType")
// const userType = require("./User/TypeDef/UserType")
// const bookingType = require("./Booking/TypeDef")
// const userResolver = require("./User")
// const eventResolver = require("./Event")

// const rootTypes = `
// type RootQuery {
//     events: [Event!]!
//     users: [User!]!
//     bookings: [Booking!]!
// }

// schema {
//     query: RootQuery
// }
// `;

// // const resolver = [userResolver, eventResolver]
// const types = [bookingType, userType, eventType]
 
// module.exports = mergeTypeDefs(types)