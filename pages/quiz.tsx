import React from "react";
import Head from "next/head";
import db from "../db.json";

import QuizBackground from "../src/components/QuizBackground";
import QuizContainer from "../src/components/QuizContainer";
import Footer from "../src/components/Footer";
import QuizLogo from "../src/components/QuizLogo";
import Widget from "../src/components/Widget";

const Quiz = () => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <meta property="og:image" content={db.bg} key="ogimage" />
      </Head>

      <QuizContainer>
        <QuizLogo className="logo" />
      
        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
