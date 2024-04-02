const path = require("path");
exports.getFilePath = function (name) {
  return path.join(process.cwd(), name);
};
