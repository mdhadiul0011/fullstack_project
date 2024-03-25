const Users = require('../model/userModel')
const jwt = require('jsonwebtoken')
const nodemailer = require("nodemailer");

const resendTokenController = async (req, res) => {
    const {email} = req.body;
    
    const resendMail = await Users.find({email: email})
    console.log(resendMail);

    if(resendMail.length > 0 ){
        jwt.sign({ email: email }, 'shhhhh', async function(err, token) {
            const transporter = nodemailer.createTransport({
              service: "gmail",
              auth: {
                user: "mdhadiul0011@gmail.com",
                pass: "mkzn wkdn igqv yqba",
              },
            });
      
            const info = await transporter.sendMail({
              from: 'MERNIAN',
              to: email,
              subject: "Orebi_Ecommerce",
              html: `Here is your resend <a href="http://localhost:5173/emailverify/${token}">Token</a>`, 
            });
          });
    }
    else{
        console.log('ai hai email mile nai');
    }

}

module.exports = resendTokenController;