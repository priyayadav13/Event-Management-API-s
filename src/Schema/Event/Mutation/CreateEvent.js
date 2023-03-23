const db = require("../../../Models/index");
const { GraphQLError } = require('graphql');
const decodeToken = require('../../../Util/DecodeToken');
exports.CREATE_EVENT = {
  async createEvent(parent, args, { token }) {
    const { name, venue, startDate, endDate } = args.input || {}
    if (!name || !venue || !startDate || !endDate) {
      throw new GraphQLError('Missing field.', {
        extensions: {
          code: 'BAD_USER_INPUT',
        },
      });
    }
    const { email } = decodeToken(token)
    const data = db.event.create({ name, venue, startDate, endDate, createBy: email });
    return data
  }
}

