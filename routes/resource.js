var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var shoe_controller = require('../controllers/shoe');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// SHOE ROUTES ///
//POST request for creating a Shoe.
router.post('/shoes', shoe_controller.shoe_create_post);
// // DELETE request to delete Shoe.
// router.delete('/shoes/:id', shoe_controller.shoe_delete);
// PUT request to update Shoe.
router.put('/shoes/:id', shoe_controller.shoe_update_put);
// GET request for one Shoe.
router.get('/shoes/:id', shoe_controller.shoe_detail);
// GET request for list of all Shoe items.
router.get('/shoes', shoe_controller.shoe_list);
module.exports = router;