import React, { FormEvent, useEffect, useState } from 'react';
import Head from 'next/head';
import db from '../db.json';

import QuizBackground from '../src/layouts/QuizBackground';
import QuizContainer from '../src/layouts/QuizContainer';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget from '../src/components/QuestionWidget';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';

const Quiz = () => {
  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAlt, setSelectedAlt] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  const stopFalseLoading = (oneSecond = 1000) =>
    setTimeout(() => {
      setIsLoading(false);
    }, oneSecond);

  useEffect(() => {
    stopFalseLoading();
  }, [questionIndex]);

  const handleAnswer = (value: number) => {
    setSelectedAlt(true);
    setPoints((prev) => prev + value);
  };

  const notAnswered = !selectedAlt;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (notAnswered) return;

    setQuestionIndex((prevQuestion) => prevQuestion + 1);
    setIsLoading(true);
    setSelectedAlt(false);
  };

  const isCompletedAllQuestions = questionIndex + 1 > totalQuestions;
  const acertos = points / 100;

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <meta property="og:image" content={db.bg} key="ogimage" />
        <title>{db.title}</title>
      </Head>

      <QuizContainer>
        <QuizLogo className="logo" />
        {isLoading && <Widget.Loading />}
        {isCompletedAllQuestions && <Widget.Result points={points} acertos={acertos} />}
        {!isLoading && !isCompletedAllQuestions && (
          <form onSubmit={handleSubmit}>
            <QuestionWidget
              totalQuestions={totalQuestions}
              questionIndex={questionIndex}
              handleAnswer={handleAnswer}
              selectedAlt={selectedAlt}
              {...question}
            >
              <Button type="submit" disabled={notAnswered}>
                Próxima
              </Button>
            </QuestionWidget>
          </form>
        )}

        <Footer />
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
