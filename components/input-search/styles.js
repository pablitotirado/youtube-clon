import styled from 'styled-components';
export const InputStyled = styled.input`
  height: 100%;
  border: 1px solid #ccc;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  outline: none;
  width: 100%;
  padding: 0 1rem;
`;

export const ButtonSearch = styled.button`
  position: relative;
  height: 100%;
  text-indent: -9999px;
  border: 1px solid #ccc;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: #ccc;
  }
`;
export const IconSearch = styled.img`
  width: 1rem;
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
`;
export const BoxInputSearchStyled = styled.div`
  width: 100%;
  height: 2rem;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowLeft = styled.div`
  font-size: 1.4rem;
  margin: 0 1rem 0 0.5rem;
  cursor: pointer;
  display: ${({ mobile }) => (mobile ? 'initial' : 'none')};
`;
