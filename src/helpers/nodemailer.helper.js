"use strict";
const nodemailer = require("nodemailer");
require("dotenv").config()

// async..await is not allowed in global scope, must use a wrapper
export default async function main(receiver, subject, text, context) {
  //create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    // host: "smtp.gmail.com",
    // port: 587,
    // secure: false,
    auth: {
      user: "cabal2barefoot@gmail.com", // generated ethereal user
      pass: "Cabal@barefoot", // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: "cabal2barefoot@gmail.com", // sender address
    to: receiver, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: context, // html body
  });

  console.log("Message sent: %s", info.messageId);

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  return info
}
