const Sequelize = require("sequelize");
const db = require("../index");
const crypto = require("crypto");

const User = db.define("user", {
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    get() {
      return () => this.getDataValue("password");
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue("salt");
    }
  },
  email: {
    type: Sequelize.STRING,
    uniqe: true,
    allowNull: false,
    vaidate: {
      isEmail: true
    }
  }
});

User.prototype.validatePW = incomingPW => {
  return User.encryptPW(incomingPW, this.salt()) === this.password();
};

User.generateSalt = () => {
  return crypto.randomBytes(16).toString("hex");
};

User.encryptPW = (pw, salt) => {
  return crypto
    .createHmac("SHA256", pw)
    .update(salt)
    .digest("hex");
};

const encryptCredentials = user => {
  user.salt = User.generateSalt();
  user.password = User.encryptPW(user.password(), user.salt());
};

User.beforeCreate(encryptCredentials);
User.beforeUpdate(encryptCredentials);
User.beforeBulkCreate(userList => {
  userList.forEach( user => {
    encryptCredentials(user);
  });
});

module.exports = User