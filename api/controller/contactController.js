const nodeContactModel = require("../model/contactModel")
const GetAllContact = (req, res, next) => {
    nodeContactModel
        .find()
        .then(data => {
            res.status(200).json({ message: "All data", Node_Contact_list: data });
        })
        .catch(err => {
            console.log(err);
        });

}

const PostEachContact = (req, res, next) => {
    const Holacontact = new nodeContactModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });
    Holacontact.save()
        .then(data => {
            res.status(200).json({ new_node_contact: data, message: "successfully inserted" });
        })
        .catch(err => {
            //console.log(err);
            res.status(400).json({
                message: "Error Occured",
                error: err
            });
        });

}

const NodeUpdatedByID = (req, res, next) => {
    const id = req.params.id
    let updateContact = {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    }
    nodeContactModel.findByIdAndUpdate(id, { $set: updateContact },{new:true})
     .then((data)=>{
         res.status(200).json({
             message:"Data Edited Successfully",
             new_edited_data :data
         })
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
    GetAllContact,
    PostEachContact,
    NodeUpdatedByID
}