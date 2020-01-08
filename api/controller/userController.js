const userModel = require("../model/userModel");
const bcrypt = require('bcrypt');
/*
const GetAllContactController = (req,res,next)=>{
    contactModel
    .find()
    .then(datas => {
      res.json({ message: "All data", Contact_list: datas });
    })
    .catch(err => {
      console.log(err);
    });

}*/

const RegisterUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
            res.json({
                error: err
            })
        }
        const user = new userModel({

            phone: req.body.phone,
            email: req.body.email,
            password: hash
        });
        user.save()
            .then((data) => {
                res.json({
                    message: "Successfully Registered",
                    User: data
                })
            })
            .catch(err => {
                console.log(err);
                res.json({
                    message: "Error Occured",
                    error: err
                });
            });
    });

}
const LoginUser = (req, res, next) => {


    let phone = req.body.phone
    let password = req.body.password

    userModel.findOne({ phone })
        .then((user) => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({ message: "error" })
                    }
                    if (result) {
                        res.json({ message: "Login Successful" })
                    }
                    else {
                        res.json({ message: "Password not match" })
                    }
                });
            }
            else {
                res.json({
                    message: "Cell number not found"
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.json({
                message: "Error Occured",
                error: err
            });
        });


}


module.exports = {
    RegisterUser,
    LoginUser
}