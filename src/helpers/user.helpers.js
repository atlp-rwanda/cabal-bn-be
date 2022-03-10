// import { } from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import "dotenv"

const {genSaltSync, hashSync, compareSync } = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv")

function hashPassword(pass) {
	const salt = genSaltSync(10, 'b');

	return hashSync(pass, salt);
}

function comparePassword(plainPassword, hashedPassword) {
	const compare = compareSync(plainPassword, hashedPassword);
	return compare
}

function generateToken(payload, expiresIn) {
	var token = jwt.sign(payload, process.env.SECRETE, { expiresIn });
	return token;
}

function decodeToken(token) {
	const verify = jwt.verify(token, process.env.SECRETE)
	return verify
}

module.exports = {hashPassword, comparePassword, generateToken, decodeToken}
