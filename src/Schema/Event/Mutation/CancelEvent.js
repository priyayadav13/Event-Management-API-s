const db = require("../../../Models/index");
const decodeToken = require('../../../Util/DecodeToken');

exports.CANCEL_EVENT = {
  async cancelEvent(parent, { name }, { token }) {
    const event = await db.event.findOne({ name });
    if (!event) {
      throw new Error("Event not found.");
    }
    const { email } = decodeToken(token)
    if (event.createBy !== mail) {
      throw new Error("You are not authorized to cancel this event.");
    }
    await Event.deleteOne({ name });
    return event;
  }
}
