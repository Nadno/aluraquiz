import styled from 'styled-components';

interface Props {
  readonly backgroundImage: string;
}

const QuizBackground = styled.div<Props>`
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  
  display: grid;
  grid-template-columns: 400px minmax(200px, 800px);
  gap: 2rem;

  @media screen and (max-width: 500px) {
    background-image: none;
    
    &:after {
      content: '';
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
