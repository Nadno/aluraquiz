import React from "react";
import Head from "next/head";
import db from "../db.json";

import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";
import InputText from "../src/components/InputText";
import Button from "../src/components/Button";
import QuizContainer from "../src/components/QuizContainer";

const IndexPage = () => (
  <QuizBackground backgroundImage={db.bg}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta property="og:image" content={db.bg} key="ogimage" />
      <meta
        property="og:description"
        content="Descubra quem você seria em The Last of Us"
        key="ogdescription"
      />

      <title>The Last of Us - Quiz</title>
    </Head>
    <QuizContainer>
      <QuizLogo className="logo" />
      <Widget>
        <Widget.Header>
          <h1>The Last of Us</h1>
          {/* <Widget.Christmas src="https://cdn.pixabay.com/photo/2021/01/03/23/40/christmas-5885920_1280.png" /> */}
        </Widget.Header>

        <Widget.Content>
          <p>Descubra quem você seria em The Last of Us.</p>

          <InputText
            id="name"
            name="name"
            placeholder="Digite um nome para jogar :)"
          />

          <Button />
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

    <GitHubCorner projectUrl="https://github.com/Nadno/aluraquiz" />
  </QuizBackground>
);

export default IndexPage;
