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
    console.log("detail" + req.params.id)
    try {
        result = await shoe.findById(req.params.id)
        res.send(String(result));
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found}`);
    }
};
// Handle shoe update form on PUT.
exports.shoe_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await shoe.findById(req.params.id)
        // Do updates of properties
        if (req.body.shoeSize)
            toUpdate.shoeSize = req.body.shoeSize;
        if (req.body.shoeType) toUpdate.shoeType = req.body.shoeType;
        if (req.body.shoeBrand) toUpdate.shoeBrand = req.body.shoeBrand;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle shoe delete form on DELETE.
exports.shoe_delete = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await shoe.findByIdAndDelete(req.params.id)
        res.send(String(result));
    } catch (error) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.shoe_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await shoe.findById(req.query.id)
        res.render('shoedetail',
            { title: 'Shoe Detail', toShow: String(result) });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a shoe.
// No body, no in path parameter, no query.
// Does not need to be async
exports.shoe_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('shoecreate', { title: 'Shoe Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a shoe.
// query provides the id
exports.shoe_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await watch.findById(req.query.id)
        res.render('shoeupdate', { title: 'Shoe Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.shoe_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await watch.findById(req.query.id)
        res.render('shoedelete', {
            title: 'Shoe Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};