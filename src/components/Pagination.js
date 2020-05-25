import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { getRandomProperty } from '../utilities';

const PaginationStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-align: center;
  margin: 2rem 0;
  justify-items: center;
  align-items: center;

  font-family: var(--monospace);
  background-color: var(--surface-dark);
  box-shadow: var(--shadow);
  border-radius: 4px;
  padding: 0 16px;
  .page-indicator {
    flex: 1 1 0;
  }
  a[disabled] {
    pointer-events: none;
    text-decoration: line-through;
  }
`;
const Message = ({ message: { message, emoji } }) => (
  <span>
    {message}
    {emoji && <span aria-hidden="true"> {emoji}</span>}
  </span>
);

export default function Pagination({
  totalCount,
  currentPage = 1,
  pathPrefix,
}) {
  const postsPerPage = 10;
  const totalPages = Math.ceil(totalCount / postsPerPage);
  const nextPage = currentPage + 1;
  const prevPage = currentPage - 1;
  const noPreviousMessages = [
    {
      message: `There's no going back`,
      emoji: '😶',
    },
  ];
  const noNextMessages = [
    {
      message: 'GAME OVER',
      emoji: '👾',
    },
    {
      message: 'End of the Road',
      emoji: '🤠',
    },
  ];
  const getRandomMessage = array => array[getRandomProperty({ ...array })];
  return (
    <PaginationStyles>
      <Link
        disabled={prevPage <= 0 ? true : null}
        to={`${pathPrefix}${prevPage}`}
      >
        {prevPage < totalPages ? (
          <Message message={getRandomMessage(noPreviousMessages)} />
        ) : (
          <Message message={{ message: `← Previous ${postsPerPage}` }} />
        )}
      </Link>
      <p className="page-indicator">
        Page {currentPage} of {totalPages}
      </p>
      <Link
        disabled={nextPage > totalPages ? true : null}
        to={nextPage > totalPages ? `/` : `${pathPrefix}${nextPage}`}
      >
        {nextPage > totalPages ? (
          <Message message={getRandomMessage(noNextMessages)} />
        ) : (
          <Message message={{ message: `${postsPerPage} More please →` }} />
        )}
      </Link>
    </PaginationStyles>
  );
}
