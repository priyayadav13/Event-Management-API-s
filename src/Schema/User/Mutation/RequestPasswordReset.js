const jwt = require('jsonwebtoken');
const db = require("../../../Models/index");

exports.REQUEST_PASSWORD_REST = {
  async requestPasswordReset(parent, { email }) {
    const generateotp = () => {
      const digits = '0123456789';
      let otp = '';
      for (let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
      }
      return otp;
    };
    
    const user = await db.user.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    const otp = generateotp();
    const token = jwt.sign(
      { id: user.id, email, otp },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return `OTP:::${otp},Token:::${token}`;
  }
}
