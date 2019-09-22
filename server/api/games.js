const router = require("express").Router();
const { Game } = require("../db/models");

router.get("/", async (req, res, next) => {
  try {
    const games = await Game.findAll();
    res.status(200).send(games);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
