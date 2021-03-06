const moongose = require('mongoose');
const bcrypt = require('bcryptjs');

const saltRounds = 10;

const UserSchema = new moongose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    role: { type: String, required: true }
})

UserSchema.pre('save', function(next){
    if(this.isNew || this.isModified('password')){
        const document = this;
        bcrypt.hash(document.password, saltRounds,
            function(err, hashedPassword){
                if(err){
                    next(err);
                }else{
                    document.password = hashedPassword;
                    next();
                }
            });
    }else{
        next();
    }
});

UserSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.password, function(err, same){
        if(err){
            callback(err);
        }else{
            callback(err, same);
        }
    });
}

// module.exports = moongose.model('User', UserSchema);

var User = module.exports = moongose.model('User', UserSchema)

module.exports.get = function (callback, limit){
    User.find(callback).limit(limit);
}
