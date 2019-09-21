const { User } = require("./server/db/models");

User.create({
  userName: "anon",
  email: "eloucks@gmail.com",
  password: "password"
});
