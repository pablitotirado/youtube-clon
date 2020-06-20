import styled from 'styled-components';

//Styles
export const ButtonOptionsStyled = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
  outline: none;
  margin: 0 0.2rem 0.2rem 0;
  border-radius: 50%;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 2.2rem;

  hr {
    margin: 0;
    width: 1.1rem;
    border: 1px solid #a39ba0;
  }

  &:hover {
    background-color: #e5e5e5;
  }
`;
