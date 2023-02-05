const express = require("express");
const router = express.Router();
const controller = require("../controller/postController");

router.get("/view/post", controller.postView);
router.post("/create/post", controller.postCreate);
router.post("/delete/post", controller.postDelete);
router.post("/change/post", controller.postChange);

module.exports = router;
