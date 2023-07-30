const crypto = require("node:crypto");

const hashData = (data) => crypto.createHash("md5").update(data).digest("hex");

module.exports = hashData;
