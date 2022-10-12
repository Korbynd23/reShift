// const { AuthenticationError } = require('apollo-server-express');
const { Employee } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      employees: async () => {
        return Employee.find();
      },
  
      employee: async (parent, { employeeId }) => {
        return Employee.findOne({ _id: employeeId });
      },
    },
  
    // Mutation: {
    //   addEmployee: async (parent, { name, password }) => {
    //     const employee = await Employee.create({ name, password });
    //     const token = signToken(employee);
  
    //     return { token, employee };
    //   },
    //   login: async (parent, { name, password }) => {
    //     const employee = await Employee.findOne({ name });
  
    //     if (!employee) {
    //       throw new AuthenticationError('No employee with this found!');
    //     }
  
    //     const correctPw = await employee.isCorrectPassword(password);
  
    //     if (!correctPw) {
    //       throw new AuthenticationError('Incorrect password!');
    //     }
  
    //     const token = signToken(employee);
    //     return { token, employee };
    //   },
  
    //   removeemployee: async (parent, { employeeId }) => {
    //     return Employee.findOneAndDelete({ _id: employeeId });
    //   },
    // },
  };
  
  module.exports = resolvers;
  