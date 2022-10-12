const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    employeeId: Int
    name: String
    password: String
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
    addEmployee(name: String!, password:String!, employeeId: Int!): Employee
    login(employeeId: Int!, password: String!): Employee

    removeEmployee(employeeId: Int!): Employee
  }
`;

module.exports = typeDefs;
