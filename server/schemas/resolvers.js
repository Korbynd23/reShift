const { AuthenticationError } = require('apollo-server-express');
const { Employee } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      employees: async () => {
        return Employee.find();
      },
  
      employee: async (parent, { employeeId }) => {
        return Employee.findOne({ employeeId: employeeId });
      },
    },
  
    Mutation: {
      addEmployee: async (parent, { name, password, employeeId }) => {
        const employee = await Employee.create({ name, password, employeeId });
        const token = signToken(employee);
        return { token, employee };
      },
      login: async (parent, { employeeId, password }) => {
        const employee = await Employee.findOne({ employeeId });
  
        if (!employee) {
          throw new AuthenticationError('No employee with this ID found!');
        }
  
        const correctPw = await employee.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(employee);
        return { token, employee };
      },
  
      removeEmployee: async (parent, { employeeId }) => {
        return Employee.findOneAndDelete({ employeeId: employeeId });
      },
    },
  };
  
  module.exports = resolvers;
  
