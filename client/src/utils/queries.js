import { gql } from '@apollo/client';

export const QUERY_EMPLOYEE = gql`
    query employee {
        employee {
            employeeId
            name
        }
    }
`;


