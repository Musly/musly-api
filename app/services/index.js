const users = require('./users/users.service.js');
const groups = require('./groups/groups.service.js');
const genres = require('./genres/genres.service.js');

module.exports = (app) => {
  app.configure(users);
  app.configure(groups);
  app.configure(genres);
};
