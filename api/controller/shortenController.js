const shortenModel = require("../model/shortenModel")

const PostEachUrl = (req, res, next) => {
    const { url} = req.body
    let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    if (regex.test(url)){
       // console.log("get in")
        let short = Math.floor(Math.random() * 1000).toString()
         const Holaurl = new shortenModel({
        original_url: url,
        shorten_url:short
    });
    Holaurl.save()
        .then(data => {
            res.status(200).json({ Url: data, message: "successfully inserted" });
        })
        .catch(err => {
            //console.log(err);
            res.status(400).json({
                message: "Error Occured mam",
                error: err
            });
        });
    }
    else{
        console.log("out")
    }
  //  console.log(url)
    // const Holaurl = new shortenModel({
    //     original_url: req.body.urlshort,
    // });
    // Holaurl.save()
    //     .then(data => {
    //         res.status(200).json({ Url: data, message: "successfully inserted" });
    //     })
    //     .catch(err => {
    //         //console.log(err);
    //         res.status(400).json({
    //             message: "Error Occured mam",
    //             error: err
    //         });
    //     });

}


module.exports = {
    PostEachUrl
}