var shoe = require('../models/shoe');
// List of all shoes
exports.shoe_list = async function (req, res) {
    try{
    theShoes = await shoe.find();
    res.send(theShoes);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


// // for a specific shoe.
// exports.shoe_detail = function(req, res) {
//  res.send('NOT IMPLEMENTED: shoe detail: ' + req.params.id);
// };
// // Handle shoe create on POST.
// exports.shoe_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: shoe create POST');
// };
// // Handle shoe delete form on DELETE.
// exports.shoe_delete = function(req, res) {
//  res.send('NOT IMPLEMENTED: shoe delete DELETE ' + req.params.id);
// };
// // Handle shoe update form on PUT.
// exports.shoe_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: shoe update PUT' + req.params.id);
// };
// VIEWS
// Handle a show all view
exports.shoe_view_all_Page = async function(req, res) {
    try{
    theShoes = await shoe.find();
    res.render('shoe', { title: 'Shoe Search Results', results: theShoes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle shoe create on POST.
exports.shoe_create_post = async function(req, res) {
    console.log(req.body)
    let document = new shoe();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    //{"shoeSize":6, "shoeType":"sports", "shoeBrand":"NIKE"}
    document.shoeSize = req.body.shoeSize;
    document.shoeType = req.body.shoeType;
    document.shoeBrand = req.body.shoeBrand;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// for a specific shoe.
exports.shoe_detail = async function(req, res) {
    console.log("here")
    console.log("detail" + req.params.id)
    try {
        console.log("herehere")
        result = await shoe.findById(req.params.id)
        res.send("result is: ", result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found}`);
    }
};