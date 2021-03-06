const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).send({
    api: "Root -- index",
    "api/users": "user stem"
  });
});

router.use("/users", require("./users"));
router.use("/admin", require("./admin"));
router.use("/games", require("./games"));

module.exports = router;
