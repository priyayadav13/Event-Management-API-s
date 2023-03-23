const { encryptPassword } = require('../../../Util/EncryptPassword');
const decodeToken = require('../../../Util/DecodeToken');
const db = require("../../../Models/index");
exports.RESET_PASSWORD = {
  async resetPassword(parent, { otp, newPassword },{token}) {
      const decodedToken = decodeToken(token)
      const user = await db.user.findOne({ where: { id: decodedToken.id } });
      if (!user) {
        throw new Error('User not found');
      }
      if (decodedToken.email !== user.email || decodedToken.otp !== otp) {
        throw new Error('Invalid otp or email');
      }
      const encryptedPassword = await encryptPassword(newPassword);
      user.password = encryptedPassword;
      await user.save();
      return user;
  }
}
