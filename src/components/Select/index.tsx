import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const Option = styled.div`
  input {
    position: absolute;
    display: none;
  }

  label {
    position: relative;
    display: block;

    width: 100%;
    padding: 1rem 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.primary};

    margin-bottom: 1rem;

    font-size: 1.5rem;
    font-weight: 600;

    &.success {
      background-color: ${({ theme }) => theme.colors.success};
    }

    &.unsuccess {
      border: 2px solid ${({ theme }) => theme.colors.success};
    }

    &.wrong {
      background-color: ${({ theme }) => theme.colors.wrong};
    }

    &:hover {
      opacity: 0.6;
      cursor: pointer;
    }
  }
`;

interface Props {
  alternatives: string[];
  questionId: number;
  answer: number;
  handleAnswer(name: string, value: boolean): void;
}

const Select = ({ alternatives, answer, questionId, handleAnswer }: Props) => {
  const [selectAlt, setSelectAlt] = useState(false);

  const handleCheck = (e: ChangeEvent) => {
    if (selectAlt) return;
    const target = e.target as HTMLInputElement;
    const { name, value, nextElementSibling } = target;
    
    const result = Number(value) === answer;
    
    (nextElementSibling as HTMLInputElement).classList.add(
      result ? 'success' : 'wrong'
    );

    if (!result) {
      document.querySelector<HTMLInputElement>(`#option-${answer}`)
        ?.nextElementSibling?.classList.add('unsuccess');
    }

    handleAnswer(name, result);
    setSelectAlt(true);
  };

  const getSelectOptions = (alt: string, key: number) => {
    const altKey = `option-${key}`;
    return (
      <Option key={altKey}>
        <input
          id={altKey}
          value={key}
          type="radio"
          name={`question__${questionId}`}
          onChange={handleCheck}
        />
        <label htmlFor={altKey}>{alt}</label>
      </Option>
    );
  };

  return <div>{alternatives.map(getSelectOptions)}</div>;
};

export default Select;
