const {makeExecutableSchema} = require('@graphql-tools/schema')
const { mergeTypeDefs , mergeResolvers} = require('@graphql-tools/merge');
const userResolvers = require("./Schema/User");
const eventResolvers = require("./Schema/Event");
const bookingResolver = require("./Schema/Booking")
const UserDefs = require("./Schema/User/TypeDef/UserType")
const EventDefs = require("./Schema/Event/TypeDef/EventType")
const BookingDef = require("./Schema/Booking/TypeDef")
const directives = require('./Directives/AuthDirective')


const types = mergeTypeDefs([UserDefs, EventDefs, BookingDef])
const resolvers = mergeResolvers([userResolvers, eventResolvers, bookingResolver])

let schema = makeExecutableSchema({
  typeDefs: types,
  resolvers: resolvers
});

Object.keys(directives).forEach((name) => {
  schema = directives[name](schema, name);
});

module.exports = schema