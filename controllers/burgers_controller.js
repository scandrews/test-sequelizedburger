
var express = require("express");
// include the data definition from schema.js
var db = require("../models");

var router = express.Router();


// routes for functionality
router.get("/", function(req, res) {
	console.log("We're in the starting get");
	db.burger.findAll({  }).then(function(dbBurger) {
		// console.log(res);
		res.render("index", { burgers: dbBurger });
      		// res.render(dbBurger);
      		// res.json(dbBurger);
		});
});

router.put("/", function(req, res) {
	console.log("we're in the / put");
	db.burger.create(req.body).then(function(dbBurger) {
		// res.json(dbBurger);
    	res.redirect("/");
	});
});

router.post("/", function(req, res) {
	console.log("we're in the / post");
	// query = "UPDATE burgers SET devoured = 1 WHERE id = " + [req.body.id];
	db.burger.update({
			devoured: true,
			},
			{
			where: {
				id: req.body.id
			}
		})
		.then(function(dbBurger){
        	res.redirect("/");
      	});
});


router.delete("/", function(req, res) {
	console.log("we're in the delete");
	db.burger.destroy({
		where: {
			id: req.body.id
		}
	}).then(function(dbBurger){
		res.redirect("/")
	});
});

//------------------------
// route for the style sheet
// router.get("/style", function(req, res){
// 	res.sendFile(path.join(__dirname, "../public/assets/css/style.css"));
// });

// // route for the image
// router.get("/url", function(req, res){
// 	console.log("we got the image request");
// 	res.sendFile(path.join(__dirname, "../public/assets/images/burger.png"));
// });


module.exports = router;