/* eslint-disable require-jsdoc */
const { genSaltSync, hashSync, compareSync } = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv');

function hashPassword(pass) {
  const salt = genSaltSync(10, 'b');

  return hashSync(pass, salt);
}

function comparePassword(plainPassword, hashedPassword) {
  const compare = compareSync(plainPassword, hashedPassword);
  return compare;
}

function generateToken(payload, expiresIn) {
  const token = jwt.sign(payload, process.env.SECRETE, { expiresIn });
  return token;
}

function decodeToken(accessToken) {
  const decoded = jwt.verify(accessToken, process.env.SECRETE);
  return decoded;
}

module.exports = { hashPassword, comparePassword, generateToken, decodeToken };
