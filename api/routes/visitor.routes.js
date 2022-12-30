const express = require("express")
const router = express.Router();

const UserController = require("../controllers/user.controller");
const ProductController = require("../controllers/product.controller")


router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.post("/verifyOTP/:userId", UserController.verifyOTP);
router.get("/products",ProductController.getProductsByPage);

module.exports = router