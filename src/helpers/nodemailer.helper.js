/* eslint-disable object-shorthand */
/* eslint-disable require-jsdoc */

const nodemailer = require('nodemailer');
require('dotenv').config();

export default async function main(receiver, subject, text, context) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cabal2barefoot@gmail.com',
      pass: 'Cabal@barefoot'
    }
  });

  const info = await transporter.sendMail({
    from: 'cabal2barefoot@gmail.com',
    to: receiver,
    subject: subject,
    text: text,
    html: context
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

  return info;
}
