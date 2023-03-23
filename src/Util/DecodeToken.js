const jwt = require('jsonwebtoken');
require('dotenv').config();

function decodeToken(token) {
  if (!token) {
    throw new Error('No token provided');
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

module.exports = decodeToken;
