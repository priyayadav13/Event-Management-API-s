const { gql } = require('apollo-server');

const typeDefs = gql`
 directive @auth on FIELD_DEFINITION

type Invitee{
  event: Event
  user: User
  status: [InviteeStatus]
}
enum InviteeStatus {
  PENDING
  ACCEPTED
  DECLINED
}

extend type Query {
  invitees(eventId: ID!): [Invitee!]!
}

type Mutation {
  inviteUser(eventId: ID!, userEmails: [String!]!): Invitee!
  updateInviteeStatus(inviteeId: ID!, status: InviteeStatus!): Invitee!
}
`
module.exports = typeDefs;
