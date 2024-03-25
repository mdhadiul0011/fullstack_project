const Users = require('../model/userModel')
const jwt = require('jsonwebtoken')

const tokenController = async (req, res) => {
    const {token} = req.body;

    var decoded = jwt.verify(token, 'shhhhh');
    console.log(decoded.email);
    
   let finduser = await Users.findOne({email: decoded.email})

    if(!finduser.emailverified) {
        await Users.findOneAndUpdate({email: decoded.email}, { emailverified: true})
        res.send('milse')
    }else{
        res.send('milenai')
    }

}

module.exports = tokenController;