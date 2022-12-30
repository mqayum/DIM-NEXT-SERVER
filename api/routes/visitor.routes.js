const express = require("express")
const router = express.Router();

const UserController = require("../controllers/user.controller");
const ProductController = require("../controllers/product.controller")


router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.post("/verifyOTP/:userId", UserController.verifyOTP);
router.get("/products",ProductController.getProductsByPage);

router.get("/test", (req, res)=>{
    return res.status(200).json({
        message: "Hello from the server"
    })
})

module.exports = router