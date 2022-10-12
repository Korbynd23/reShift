const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return Employee.find()
    },

    user: async (parent, {userId}) => {
      return Employee.findOne({ _id: userId});
    }
  }
}

module.exports = resolvers