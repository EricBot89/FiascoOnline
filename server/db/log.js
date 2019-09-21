const fs = require("fs");

const log = async data => {
  const isBig = false;
  try {
    fs.Stats("./sequelizelog.txt", (err, stats) => {
      if (err) throw err;
      const { size } = stats;
      if (size > 15000) {
        isbig = true;
      }
    });
    if (isBig) {
      fs.unlink("./oldsequelizelog.html");
      fs.rename("./sequelizelog.html", "./oldsequelizelog.html");
    }
    const logEntry = `
    <br> 
    <h4> Logged ${new Date()} </h4>
    <br>
    <p>${data}</p>
    <br>
    <br>
    <hr>
    `;

    fs.appendFile("./sequelizelog.html", logEntry, err => {
      if (err) throw err;
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = log;
