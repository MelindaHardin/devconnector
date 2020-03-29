const router = require("express").Router();

//@route 	POST api/users
//@desc 	Register users
//@access Public
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("User route");
});

module.exports = router;
