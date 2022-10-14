import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
    mutation addEmployee($name: String!, $password:Int!) {
        addEmployee(name: $name, password: $password) {
            employee {
            name
            }
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

