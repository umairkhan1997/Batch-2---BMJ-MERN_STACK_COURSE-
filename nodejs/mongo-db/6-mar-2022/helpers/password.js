const bcrypt = require('bcrypt');
const saltRounds = 10;


function generateHash (password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if(err) {
            reject(err);
            return;
        }
        bcrypt.hash(password, salt, function(err, hash) {
            if(err) {
                reject(err);
                return;
            }
            // Store hash in your password DB.
            resolve(hash)
        });
    });
  })
}

function comparePassword (password, hash) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, result) {
            if(err) {
                reject(err);
                return;
            }
            resolve(result)
            // result == true
        });
    })
};


module.exports = {
    generateHash,
    comparePassword
};