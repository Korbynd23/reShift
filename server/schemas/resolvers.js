const { AuthenticationError } = require('apollo-server-express');
const { Employee } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      profiles: async () => {
        return Profile.find();
      },
  
      profile: async (parent, { profileId }) => {
        return Profile.findOne({ _id: profileId });
      },
    },
  
    Mutation: {
      addProfile: async (parent, { name, password }) => {
        const profile = await Profile.create({ name, password });
        const token = signToken(profile);
  
        return { token, profile };
      },
      login: async (parent, { name, password }) => {
        const profile = await Profile.findOne({ name });
  
        if (!profile) {
          throw new AuthenticationError('No profile with this found!');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(profile);
        return { token, profile };
      },
  
      removeProfile: async (parent, { profileId }) => {
        return Profile.findOneAndDelete({ _id: profileId });
      },
    },
  };
  
  module.exports = resolvers;
  