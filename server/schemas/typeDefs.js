const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID
    name: String
    password: Int
  }

  # type Auth {
  #   token: ID!
  #   employee: Employee
  # }

  type Query {
    employees: [Employee]!
    employee(employeeId: ID!): Employee
    me: Employee
  }

  # type Mutation {
  #   addEmployee(name: String!, password:INT!, employeeId:INT!): Auth
  #   login(name: String!, password: INT!): Auth

  #   removeEmployee: Employee
  # }
`;

module.exports = typeDefs;
