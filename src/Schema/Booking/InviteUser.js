const decodeToken = require('../../Util/DecodeToken');
const db = require("../../Models");

exports.INVITE_USER = {
  async inviteUser(parent, { eventId, userEmails }, { token }) {
    try {
      // Check if user is logged in
      if (!token) {
        throw new Error("Unauthorized");
      }

      if (!eventId || !userEmails) {
        throw new GraphQLError('Missing field.', {
          extensions: {
            code: 'BAD_USER_INPUT',
          },
        });
      }

      const { email } = decodeToken(token)

      // Check if event exists
      const event = await db.event.findByPk(eventId);
      if (!event) {
        throw new Error("Event not found");
      }

      // Check if user is event creator
      if (event.createBy !== email) {
        throw new Error("Only event creator can invite users");
      }

      // Find invited users
      const user = await db.user.findOne({
        where: { email: userEmails },
      });

      if (!user) {
        throw new Error("User does not exist");
      }

      // Add the logged-in user and invited users to the event
      const invitations = await event.addUsers(user.id);

      // Return created invitations
      if (!invitations) {
        throw new Error("User already invited");
      } 
      // Return the event details with the invited user list
      return "User invited ";

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
