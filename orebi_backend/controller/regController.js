const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken')

let RegController = async (req, res) =>{

  const {name, email, password,} = req.body;

  if(!name || !email || !password){
    return res.send({error: "Please fill the all field"})
  }

  if(password && password.length < 6){
    return res.send({error: "Password is too small"})
  }

  const existingMail = await User.find({email: email})
  console.log(existingMail);

  if(existingMail.length > 0) {
    return res.send({error: "This email already in use"})
  }
  else{
  const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

    bcrypt.hash(password, 10, async function(err, hash) {
      
      const user = new User({
        name: name,
        email: email,
        password: hash,
        otp: otp,
      })

      user.save()

      jwt.sign({ email: email }, 'shhhhh', async function(err, token) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "mdhadiul0011@gmail.com",
            pass: "mkzn wkdn igqv yqba",
          },
        });
  
        const info = await transporter.sendMail({
          from: 'MERNIAN', // sender address
          to: email, // list of receivers
          subject: "Orebi_Ecommerce", // Subject line
          html: `Here is your <a href="http://localhost:5173/emailverify/${token}">Token</a>`, // html body
        });
      });

      // const transporter = nodemailer.createTransport({
      //   service: "gmail",
      //   auth: {
      //     user: "mdhadiul0011@gmail.com",
      //     pass: "mkzn wkdn igqv yqba",
      //   },
      // });

      // const info = await transporter.sendMail({
      //   from: 'MERNIAN', // sender address
      //   to: email, // list of receivers
      //   subject: "Orebi_Ecommerce", // Subject line
      //   html: `Here is your <b>OTP :</b> ${otp}`, // html body
      // });
    
      res.send({
        name: user.name,
        email: user.email,
        role: user.role
      })
  });
  }
}

module.exports = RegController;