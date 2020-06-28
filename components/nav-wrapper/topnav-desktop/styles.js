import styled from 'styled-components';

export const BoxTopNavDesktop = styled.div`
  width: 100%;
  grid-column: 1 / 22;
  grid-row: 1 / 2;
  display: none;
  justify-content: space-around;

  .left {
    flex-basis: 25%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .center {
    flex-basis: 50%;
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
    flex-basis: 25%;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
