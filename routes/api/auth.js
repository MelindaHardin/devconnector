const router = require("express").Router();
const auth = require("../../middleware/auth");
const User = require("../../models/Users");
//@route 	GET api/auth
//@desc 	Test route, for now.
//@access Public
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
