import styled from 'styled-components';

const Input: any = styled.input`
  width: 100%;
  height: 4rem;
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: initial;
  margin: 1.5rem 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface TextProps {
  id: string;
  name: string;
  user: string;
  placeholder: string;
  handleChange: Function;
}

Input.Text = function InputText({ user, handleChange, ...props }: TextProps) {
  return <Input type="text" value={user} onChange={handleChange} {...props} />;
};

export default Input;
