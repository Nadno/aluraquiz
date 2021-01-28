import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 4rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.contrastText};
  cursor: pointer;

  transition: background-color 0.6s ease-in;

  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

export default Button;