import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid var(--grey);
  border-radius: 0.5rem;
  padding: 1rem;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid var(--grey);
    padding: 10px;
  }
`;

export default Table;
