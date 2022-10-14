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
    addEmployee(name: String!, password:String!): Auth
    login(name: String!, password: String!): Auth
    removeEmployee(name: String!): Employee
    addReactionStart(startTimeValue: Int!): Employee
    addReactionEnd(endTimeValue: Int!): Employee
  }


`;

module.exports = typeDefs;
