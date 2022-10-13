const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    name: String
    password: String
    startValues: [startValues]
    endValues: [endValues]
  }

  type startValues {
    startTimeValue: Int
    createdAt: String
    employee: Employee
  }
  
  type endValues {
    endTimeValue: Int
    createdAt: String
    employee: Employee
  }

  type Auth {
    token: ID!
    employee: Employee
  }

  type Query {
    employees: [Employee]!
    employee(name: String): Employee
    me: Employee
  }

  type Mutation {
    addEmployee(name: String!, password:String!): Employee
    login(employeeId: Int!, password: String!): Employee
    removeEmployee(employeeId: Int!): Employee
    addReactionsStart(startTimeValue: Int!)
    addReactionsEnd(endTimeValue: Int!)
  }


`;

module.exports = typeDefs;
