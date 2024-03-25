const mongoose = require('mongoose')

const {Schema} = mongoose;

const userSchema = new Schema ({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    emailverified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["Admin", "Merchant", "User"],
        default: "User"
    },
    otp: {
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);