const {CREATE_EVENT} = require("./Mutation/CreateEvent")
const {EVENT_LIST} = require("./Queries/Events")
const {CANCEL_EVENT} = require("./Mutation/CancelEvent")
const {LIST_EVENTS} = require("./Queries/ListEvent")

const resolvers = {
  Query: {
    events: EVENT_LIST.events,
    findEvent: EVENT_LIST.findEvent,
    listEvent:LIST_EVENTS.listEvent
  },
  Mutation:{
    //Insert,Update and Delete
    createEvent: CREATE_EVENT.createEvent,
    cancelEvent:CANCEL_EVENT.cancelEvent
  },
};

module.exports = resolvers
