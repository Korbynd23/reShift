const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    employeeId: Int
    name: String
    password: Int
  }

  # type Auth {
  #   token: ID!
  #   employee: Employee
  # }

  type Query {
    employees: [Employee]!
    employee(employeeId: Int!): Employee
    me: Employee
  }

  type Mutation {
    addEmployee(name: String!, password:Int!, employeeId: Int!): Employee
    login(name: String!, password: Int!): Employee

    removeEmployee(employeeId: Int!): Employee
  }
`;

module.exports = typeDefs;
