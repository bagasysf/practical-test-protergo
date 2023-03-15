const bcrypt = require('bcryptjs');

const hash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};
const compare = (password, passwordHash) => {
  return bcrypt.compareSync(password, passwordHash);
};

module.exports = {
  hash,
  compare,
};
