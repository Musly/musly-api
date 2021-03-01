const { authenticate } = require('@feathersjs/authentication').hooks;
const { cleanResponse } = require('../../hooks/cleanResponse');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [authenticate('jwt')],
    get: [authenticate('jwt')],
    create: [authenticate('jwt')],
    update: [authenticate('jwt')],
    patch: [authenticate('jwt')],
    remove: [authenticate('jwt')],
  },

  after: {
    all: [cleanResponse],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
