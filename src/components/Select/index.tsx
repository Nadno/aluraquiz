import { ChangeEvent } from 'react';
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
  selectedAlt: boolean;
  alternatives: string[];
  questionId: number;
  answer: number;
  handleAnswer(value: number): void;
}

const Select = ({
  selectedAlt,
  alternatives,
  answer,
  questionId,
  handleAnswer,
}: Props) => {
  const getAnswer = () =>
    document.querySelector<HTMLInputElement>(`#option-${answer}`)
      ?.nextElementSibling;

  const handleCheck = (e: ChangeEvent) => {
    if (selectedAlt) return;
    const target = e.target as HTMLInputElement;
    const { value, nextElementSibling } = target;

    const result = Number(value) === answer;
    handleAnswer(result ? 100 : 0);

    (nextElementSibling as HTMLInputElement)
      .classList.add(result ? 'success' : 'wrong');

    if (!result) {
      getAnswer()?.classList.add('unsuccess');
    }
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
