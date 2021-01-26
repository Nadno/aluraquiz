import styled from "styled-components";
import BackgroundImage from "../components/BackGround";

// Tagged Function abaixo
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 10px;
  }
`;

const IndexPage = () => (
  <BackgroundImage>
    <QuizContainer>
      Testando BackgroundImage
    </QuizContainer>
  </BackgroundImage>
);

export default IndexPage;
