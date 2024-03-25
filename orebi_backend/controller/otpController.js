const Users = require('../model/userModel')

const otpController = async (req, res) => {
    const {email, otp} = req.body;
    
   let finduser = await Users.findOne({email: email})
   console.log(finduser.otp);

    if(!finduser.emailverified && finduser.otp == otp) {
        await Users.findOneAndUpdate({email: email}, {otp: "", emailverified: true})
        res.send('milse')
    }else{
        res.send('milenai')
    }

}

module.exports = otpController;