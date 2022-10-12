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

  type Mutation {
    addEmployee(name: String!, password:Int!, employeeId:Int!): Employee
    login(name: String!, password: Int!): Employee

    removeEmployee: Employee
  }
`;

module.exports = typeDefs;
