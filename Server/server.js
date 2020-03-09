const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log("You are listening on port ", "", PORT)
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname + '/contact.html'));
  console.log("form")
});

app.post('/contact', (req,res) => {
  "use strict";

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass // generated ethereal password
    }
  });
  
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: req.body.user_mail, // sender address
    to: 'vin.gao97@gmail.com', // list of receivers
    subject: "Hello", // Subject line
    text: req.body.user_message, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
});