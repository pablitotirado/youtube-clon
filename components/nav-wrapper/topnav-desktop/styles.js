import styled from 'styled-components';

export const BoxTopNavDesktop = styled.div`
  width: 100%;
  grid-column: 1 / 11;
  grid-row: 1 / 2;
  display: none;
  justify-content: space-around;
  padding: 0 min(0.5rem);

  .left {
    flex-basis: 20%;
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
    display: initial;
    flex-basis: 20%;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
