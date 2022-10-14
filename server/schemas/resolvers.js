const { AuthenticationError } = require('apollo-server-express');
const { Employee } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      employees: async () => {
        return Employee.find();
      },
  
      employee: async (parent, { name }) => {
        return Employee.find({ name: name });
      },
    },
  
    Mutation: {
      addEmployee: async (parent, { name, password }) => {
        const employee = await Employee.create({ name, password });
        const token = signToken(employee);
        return { token, employee };
      },
      login: async (parent, { name, password }) => {
        console.log(name, password)
        const employee = await Employee.findOne({ name: name });
  
        if (!employee) {
          throw new AuthenticationError('No employee with this name found!');
        }
  
        const correctPw = await employee.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(employee);
        return { token, employee };
      },

      // addReactionStart: async (parent, { name }) => {
      //   const reaction = await Employee.create({name});
      //   return {reaction}
      // },
  
      removeEmployee: async (parent, { name }) => {
        return Employee.findOneAndDelete({ name: name });
      }
    },
  };
  
  module.exports = resolvers;
  
