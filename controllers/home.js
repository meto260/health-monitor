const path = require("path");

module.exports.Index = (q, s) => {
    s.sendFile(path.join(__dirname, '../views/index.html'));
}

module.exports.ListJobsHome = (q, s) => {
    s.sendFile(path.join(__dirname, '../views/list.html'));
}