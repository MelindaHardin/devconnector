const router = require("express").Router();

//@route 	GET api/users
//@desc 	Test route, for now.
//@access Public
router.get("/", (req, res) => res.send("User route"));

module.exports = router;
