const router = require("express").Router();
const path = require("path");

router.get("/dblog", (req, res, next) => {
  //set up privages for this
  res.status(200).sendFile(path.join(__dirname, "../../sequelizelog.html"));
});

module.exports = router;
