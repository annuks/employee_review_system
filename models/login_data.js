const mogoose = require ('mongoose');
const loginSchema = new mogoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required'
    },
    password:{

        type:String,
        required:true,
        min: [3, 'Minimum Three digit is required'],
        max:6
    },
    type:{
        logintype:String,
        required:true,
        enum:['EMPLOYEE','ADMIN'],
        default:'EMPLOYEE'
    },
        timeseries:true
});
const Login_data = mogoose.model('Login_data',loginSchema);
module.exports = Login_data;