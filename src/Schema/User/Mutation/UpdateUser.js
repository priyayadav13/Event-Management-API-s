const db = require("../../../Models/index");
const decodeToken = require('../../../Util/DecodeToken');
exports.USER_UPDATE = {
  async updateName(parent, { name }, { token }) {
    const { id } = decodeToken(token);
    if (!id) {
      throw new AuthenticationError('Invalid token');
    }
    const user = await db.user.findOne({ where: { id } });
    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    user.name = name;
    await user.save();
    return user;
  }
}

