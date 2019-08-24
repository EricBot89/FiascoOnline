const router = require("express").Router();
const { User } = require("../db/models");

router.post("./", (req, res, next) => {
  try {
    res.status(200).send("this will handle signup -- change status code");
  } catch (error) {
    next(error);
  }
});

router.put("./", (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const user = User.findOne({ where: { userName } });
    if (user) {
      user.validate(password)
        ? res.status(200).send(user)
        : res.status(403).send();
    } else {
      res.status(403).send();
    }
  } catch (error) {
    next(error);
  }
});

// consider Oauth

module.exports = router;
