import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
    mutation addEmployee( $name: String!, $password:String!) {
        addEmployee(name: $name, password: $password) { 
              name
              password
        }
    }  
`;

export const REMOVE_EMPLOYEE = gql`
    mutation removeEmployee($name: String!) {
        removeEmployee(name: $name)
    }
`;

export const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
      employee {
        name
      }
    }
  }
`;

export const ADD_REACTIONSTART = gql`
  mutation addReactionStart($reaction: Int!) {
    addReactionStart(reaction: $reaction) {
      startTimeValue
    }
  }`


