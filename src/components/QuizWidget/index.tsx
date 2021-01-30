import React from 'react';

import { setShowAnimation } from '../../utils/animations';

import Widget from '../Widget';
import styled from 'styled-components';

interface Props {
  bg: string;
  id: number;
  title: string;
  description: string;
  handleClick: Function;
}

const StyledQuiz = styled.div`
  transition: transform 0.5s ease;

  &:hover {
    cursor: pointer;
    transform: translateY(-8px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export default function QuizWidget({
  bg,
  id,
  title,
  description,
  handleClick,
}: Props) {
  return (
    <StyledQuiz>
      <Widget
        {...setShowAnimation({
          delay: Number(`0.${id}`),
          duration: 0.5,
        })}
        onClick={handleClick}
      >
        <Widget.Header>
          <h1>{title}</h1>
          {/* <Widget.Christmas src="https://cdn.pixabay.com/photo/2021/01/03/23/40/christmas-5885920_1280.png" /> */}
        </Widget.Header>

        <Widget.Image src={bg} />
        <Widget.Content>
          <p>{description}</p>
        </Widget.Content>
      </Widget>
    </StyledQuiz>
  );
}
