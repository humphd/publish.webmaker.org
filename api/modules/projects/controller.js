var Project = require('./model.js');

module.exports = {
  getProjects: function(req, reply) {
    return reply(Project.fetchAll());
  },
  getProject: function(req, reply) {
    return reply(Project.query({
      where: {
        id: req.params.id
      }
    }).fetch());
  },
  getUserProjects: function(req, reply) {
    return reply(Project.query({
      where: {
        user_id: req.params.user_id
      }
    }).fetchAll());
  },
  getUserProject: function(req, reply) {
    return reply(Project.query({
      where: {
        user_id: req.params.user_id,
        id: req.params.id
      }
    }).fetch());
  },
  createProject: function(req, reply) {
    return reply(Project.forge({
      title: req.payload.title,
      user_id: req.payload.user_id,
      tags: req.payload.tags,
      description: req.payload.description,
      date_created: req.payload.date_created,
      date_updated: req.payload.date_updated
    }).save());
  },
  updateProject: function(req, reply) {
    return reply(Project.query({
      where: {
        id: req.payload.id
      }
    }).save({
      title: req.payload.title,
      user_id: req.payload.user_id,
      tags: req.payload.tags,
      description: req.payload.description,
      date_created: req.payload.date_created,
      date_updated: req.payload.date_updated
    }, {
      method: 'update',
      patch: 'true'
    }));
  },
  deleteProject: function(req, reply) {
    return reply(Project.query({
      where: {
        id: req.params.id
      }
    }).destroy());
  }
};