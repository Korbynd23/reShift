import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
    mutation addEmployee($employeeId: Int!, $name: String!, $password:Int!) {
        addEmployee(employeeId: $employeeId, name: $name, password: $password) {
            employee {
            employeeId
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
