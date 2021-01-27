import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 4rem;
  padding: 0 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: initial;

  color: ${({ theme }) => theme.colors.contrastText};

  &::placeholder {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

interface Props {
  [propName: string]: any;
}

export default function InputText(props: Props) {
  const [name, setName] = useState("");
  const handleInput = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setName(value);
  }

  return <Input type="text" value={name} onChange={handleInput} {...props} />;
}
