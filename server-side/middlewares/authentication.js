const { verify } = require('../helpers/jwt');

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw {
        name: 'InvalidToken',
      };
    }
    const user = verify(access_token);
    if (!access_token) {
      throw {
        name: 'InvalidToken',
      };
    }
    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = {
  authentication,
};
