const { AuthenticationError } = require('apollo-server-express');
const { Employee } = require('../models');
// const { signToken } = require('../utils/auth');

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
        // const token = signToken(employee);
        return employee
        // return { token, employee };
      },
      login: async (parent, { name, password }) => {
        const employee = await Employee.findOne({ name, password });
  
        if (!employee) {
          throw new AuthenticationError('No employee with this found!');
        }
  
        const correctPw = await employee.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        // const token = signToken(employee);
        // return { token, employee };
        return employee;
      },
  
      removeEmployee: async (parent, { employeeId }) => {
        return Employee.findOneAndDelete({ employeeId: employeeId });
      },
    },
  };
  
  module.exports = resolvers;
  
