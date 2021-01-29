import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { setShowAnimation } from '../../utils/animations';

import QuizBackground from '../../layouts/QuizBackground';
import QuizContainer from '../../layouts/QuizContainer';
import Footer from '../../components/Footer';
import QuizLogo from '../../components/QuizLogo';
import QuestionWidget from '../../components/QuestionWidget';
import Widget from '../../components/Widget';
import Button from '../../components/Button';

import { QuizDB } from '../../interfaces/db';

const Quiz = ({ quiz }: { quiz: QuizDB; }) => {
  const { name } = useRouter().query;

  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAlt, setSelectedAlt] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = quiz?.questions[questionIndex];
  const totalQuestions = quiz?.questions.length;

  useEffect(() => setIsLoading(false), [questionIndex]);

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
  const hits = points / 100;

  return (
    <QuizBackground backgroundImage={quiz?.bg}>
      <Head>
        <meta property="og:image" content={quiz?.bg} key="ogimage" />
        <meta
          property="og:description"
          content={quiz?.description}
          key="ogdescription"
        />

        <title>{quiz?.title}</title>
      </Head>

      <QuizContainer>
        <QuizLogo className="logo" />
        {isLoading && !isCompletedAllQuestions && <Widget.Loading />}
        {!isLoading && isCompletedAllQuestions && (
          <Widget.Result user={name} points={points} hits={hits} />
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

        <Footer
          {...setShowAnimation({ delay: 0, duration: 0.5 })}
        />
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
