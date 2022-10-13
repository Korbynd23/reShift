import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
    mutation addEmployee($employeeId: Int!, $name: String!, $password:Int!) {
        addEmployee(employeeId: $employeeId, name: $name, password: $password) {
            employee {
            name
            }
        }
    }
  
`;

export const REMOVE_EMPLOYEE = gql`
    mutation removeEmployee($employeeId: Int!) {
        removeEmployee(Employee: $employeeId)
    }
`;

export const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
      employee {
        _id
        name
      }
    }
  }
`;

