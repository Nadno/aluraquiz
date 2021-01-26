import styled from "styled-components";

import BackgroundImage from "../src/components/BackGround";
import Widget from "../src/components/Widget";

// Tagged Function below
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
      <Widget>
        <Widget.Header>
          <h1>The legend of zelda</h1>
        </Widget.Header>
        <Widget.Content>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, quam.
          </p>
        </Widget.Content>
      </Widget>

      <Widget>
        <Widget.Content>
          <h1>Quizes da Galera</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, quam.
          </p>
        </Widget.Content>
      </Widget>
    </QuizContainer>
  </BackgroundImage>
);

export default IndexPage;
