const mongoose = require("mongoose");
const { generateHash } = require('../../helpers/password');

const Schema = mongoose.Schema;
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const UserSchema = new Schema({
    firstName: { type: String, default: '', maxlength: [ 120, "Maxmimum 120 Chars allowed"]},
    lastName: { type: String, default: '', maxlength: [ 120, "Maxmimum 120 Chars allowed"]},
    email: { 
        type: String, 
        unique: true,
        required: true, 
        validate: {
            validator: function(value) {
                return re.test(value)
            },
            message: (props) => `${props.value} is not valid Email Address`
        }
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Minimum 8 chars required"]
    }
}, { timestamps: true });


UserSchema.pre('save', async function(next) {
    console.log(this)
    const hash = await generateHash(this.password);
    this.password = hash;
    next()

})


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;