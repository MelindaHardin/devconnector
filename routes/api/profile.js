const router = require("express").Router();

//@route 	GET api/profile
//@desc 	Test route, for now.
//@access Public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;
