const User = require('../model/userModel');
const bcrypt = require('bcrypt');

let Login = async (req, res) =>{

  const { email, password,} = req.body;

  if (!(email && password)) {
    res.status(400).send("All input is required");
  }
  
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))){
    res.send('kaj hoise');
  }
  else{
    res.send('kaj hoinai')
  }
}

module.exports = Login;