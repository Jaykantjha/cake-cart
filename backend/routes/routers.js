const express = require('express');
const router = express.Router();

const UserController = require("../controllers/users.controller");
const NewsController = require("../controllers/news.controller");
// const CakesCategoryController = require("../controllers/cakescatreg.controller");
const OffersController = require("../controllers/offers.controller");
const CakesController = require("../controllers/cake.controller");


//routes
// router.get('/', getAll);

router.post("/register", UserController.createUser);

router.post("/login", UserController.userLogin);

router.post("/newsregister", NewsController);

// router.post("/cakescatregister", CakesCategoryController);

router.post("/cakesregister", CakesController);

router.post("/offersregister", OffersController);

module.exports = router;