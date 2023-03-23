const { gql } = require('apollo-server');

const typeDefs = gql`
 directive @auth on FIELD_DEFINITION
 scalar Date

type Event{
  id: ID!
  name: String!
  venue: Venue!
  startDate: Date!
  endDate: Date!
  createBy:String!
  users: [User]
}

type EventList {
  totalCount: Int!
  events: [Event]!
}

enum Venue {
SURAT
BARODA
AHMEDABAD
}

type Query {
  findEvent(id: ID): Event @auth
  listEvent(    
    limit: Int!
    offset: Int!
    sortBy: String!
    sortOrder: String!
    startDate: String
    endDate: String
    search: String): EventList! @auth
  event(eventId: ID!): Event @auth
  events: [Event] @auth
}

input CreateEventInput{
  name: String!
  venue: Venue!
  startDate: Date!
  endDate: Date!
}

type Mutation {
  createEvent(input:CreateEventInput): Event @auth
  cancelEvent(name:String):Event @auth
  inviteToEvent(eventId: ID!, emails: [String!]!): Event! @auth
}
`
module.exports = typeDefs;
