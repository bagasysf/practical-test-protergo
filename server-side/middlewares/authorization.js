const authorization = async (req, res, next) => {
  try {
    console.log(req.user);
    const { role } = req.user;
    if (role !== 'admin') {
      throw {
        name: 'UnauthorizedRole',
      };
    }
    next();
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

module.exports = authorization;
