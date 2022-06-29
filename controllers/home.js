const path = require("path");

module.exports.Index = (q, s) => {
    s.sendFile(path.join(__dirname, '../views/index.html'));
}