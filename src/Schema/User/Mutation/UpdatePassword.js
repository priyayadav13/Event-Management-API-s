const { encryptPassword }= require('../../../Util/EncryptPassword');
const decodeToken = require('../../../Util/DecodeToken');
const {user} = require("../../../Models/index");


exports.UPDATE_PASSWORD = {
  async updatePassword(parent, { password }, { token }) {
    const { id } = decodeToken(token);
    const userRecord = await user.findByPk(id);
    const hashedPassword = await encryptPassword(password);
    userRecord.password = hashedPassword;
    await userRecord.save();

    return userRecord;
  }
}
