const { encryptPassword, comparePasswords } = require('../../../Util/EncryptPassword');
const decodeToken = require('../../../Util/DecodeToken');
const db = require("../../../Models/index");

exports.CHANGE_PASSWORD = {
  async changePassword(parent, {currentPassword, newPassword}, {token}) {
    const { id } = decodeToken(token);
    const user = await db.user.findByPk(id);
    const isMatch = await comparePasswords(currentPassword, user.password);
    if (!isMatch) {
      throw new Error('Invalid current password');
    }
    const updatedPassword = await encryptPassword(newPassword);
    user.password = updatedPassword;
    await user.save();
    return user;
  }
}