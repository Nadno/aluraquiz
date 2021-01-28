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
  const [isLoading, setIsLoading] = useState(true);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [answers, setAnswers] = useState<{ [propName: string]: boolean }>({});

  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  const stopFalseLoading = (oneSecond = 1000) =>
    setTimeout(() => {
      setIsLoading(false);
    }, oneSecond);

  useEffect(() => {
    stopFalseLoading();
  }, [questionIndex]);

  const handleAnswer = (name: string, value: boolean) => {
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const notAnswered = answers?.[`question__${questionIndex}`] === undefined;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (notAnswered) return;

    setQuestionIndex((prevQuestion) => prevQuestion + 1);
    setIsLoading(true);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <meta property="og:image" content={db.bg} key="ogimage" />
      </Head>

      <QuizContainer>
        <QuizLogo className="logo" />

        {isLoading ? (
          <Widget.Loading />
        ) : (
          <form onSubmit={handleSubmit}>
            <QuestionWidget
              totalQuestions={totalQuestions}
              questionIndex={questionIndex}
              handleAnswer={handleAnswer}
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
