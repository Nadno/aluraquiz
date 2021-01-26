import Head from "next/head";
import styled from "styled-components";
import db from "../db.json";

import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizLogo from "../src/components/QuizLogo";
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
  <QuizBackground backgroundImage={db.bg}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta property="og:image" content={db.bg} key="image" />

      <title>LoremQuiz</title>
    </Head>
    <QuizContainer>
      <QuizLogo className="logo" />
      <Widget>
        <Widget.Header>
          <h1>The Last of Us</h1>
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

      <Footer />
    </QuizContainer>

    <GitHubCorner projectUrl="/" />
  </QuizBackground>
);

export default IndexPage;
