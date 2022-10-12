const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    password: String
    employeeId: Int!
  }

  # type Auth {
  #   token: ID!
  #   profile: Profile
  # }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    me: Profile
  }

#   type Mutation {
#       addProfile(name: String!, email: String!, password: String!): Auth
#       login(email: String!, password: String!): Auth

#       addSkill(profileId: ID!, skill: String!): Profile
#       removeProfile: Profile
#       removeSkill(skill: String!): Profile
#   }
# `;

module.exports = typeDefs;
