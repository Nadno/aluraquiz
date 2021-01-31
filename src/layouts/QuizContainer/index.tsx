import styled from 'styled-components';

// Tagged Function below
const QuizContainer: any = styled.div`
  max-width: 350px;
  padding-top: 45px;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 10px;
  }
`;

QuizContainer.Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  grid-template-rows: repeat(auto-fit, 1fr);
  justify-content: center;

  gap: 1rem;
  margin-top: 110px;
`;

export default QuizContainer;
