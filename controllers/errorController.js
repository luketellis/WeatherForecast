const { MESSAGES } = require("../util/constants");

exports.get404 = (req, res, next) => {
  res.status(404).json({ message: MESSAGES.PATH_ERROR });
};
