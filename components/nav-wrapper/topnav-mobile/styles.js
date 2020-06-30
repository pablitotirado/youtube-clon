import styled from 'styled-components';

export const BoxTopNavMobile = styled.div`
  grid-column: 1 / 22;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3rem min(0.5rem);

  .left {
    display: flex;
    align-items: center;
    flex-basis: 50%;
  }
  .right {
    flex-basis: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const IconSearch = styled.div`
  padding: 0.5rem 0.6rem 0.4rem;
  fill: #a39ba0;
  width: 2.6rem;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => (props.mobile ? 'none' : 'initial')};
  &:hover {
    background-color: #e5e5e5;
  }
`;
