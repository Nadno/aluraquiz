import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import QuizBackground from '../src/layouts/QuizBackground';
import QuizContainer from '../src/layouts/QuizContainer';
import Footer from '../src/components/Footer';
import QuizLogo from '../src/components/QuizLogo';
import QuestionWidget from '../src/components/QuestionWidget';
import Widget from '../src/components/Widget';
import Button from '../src/components/Button';

const Quiz = () => {
  const { name } = useRouter().query;
  const userName = name ? name : '';

  const [db, setDb] = useState({
    title: '',
    bg: '',
    description: '',
    questions: [],
  });

  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAlt, setSelectedAlt] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = db?.questions[questionIndex];
  const totalQuestions = db?.questions.length;

  useEffect(() => {
    fetch('http://localhost:3000/api/db')
      .then((res) => res.json())
      .then((res) => {
        setDb(res);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => setIsLoading(false), [questionIndex])

  const handleAnswer = (value: number) => {
    setSelectedAlt(true);
    setPoints((prev) => prev + value);
  };

  const notAnswered = !selectedAlt;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (notAnswered) return;

    setQuestionIndex((prevQuestion) => prevQuestion + 1);
    setSelectedAlt(false);
    setIsLoading(true);
  };

  const isCompletedAllQuestions = questionIndex + 1 > totalQuestions;
  const acertos = points / 100;

  return (
    <QuizBackground backgroundImage={db?.bg}>
      <Head>
        <meta property="og:image" content={db?.bg} key="ogimage" />
        <meta
          property="og:description"
          content={db?.description}
          key="ogdescription"
        />

        <title>{db?.title}</title>
      </Head>

      <QuizContainer>
        <QuizLogo className="logo" />
        {isLoading && !isCompletedAllQuestions && <Widget.Loading />}
        {!isLoading && isCompletedAllQuestions && (
          <Widget.Result user={userName} points={points} acertos={acertos} />
        )}

        {!isCompletedAllQuestions && !isLoading && (
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
