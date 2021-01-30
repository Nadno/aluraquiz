import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import { setShowAnimation } from '../../utils/animations';

import QuizBackground from '../../layouts/QuizBackground';
import QuizContainer from '../../layouts/QuizContainer';
import Footer from '../../components/Footer';
import QuizLogo from '../../components/QuizLogo';
import QuestionWidget from '../../components/QuestionWidget';
import Widget from '../../components/Widget';
import Button from '../../components/Button';

import { QuizDB, ExternalQuizDB } from '../../interfaces/db';
import QuizForm from '../../components/QuizForm';

const Quiz = ({ quiz }: { quiz: QuizDB | ExternalQuizDB }) => {
  const [start, setStart] = useState(false);
  const [name, setName] = useState('');

  const [points, setPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAlt, setSelectedAlt] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);

  const question = quiz?.questions[questionIndex];
  const totalQuestions = quiz?.questions.length;

  useEffect(() => setIsLoading(false), [questionIndex]);

  const handleFormChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setName(value);
  };

  const handleFormStart = (e: FormEvent) => {
    e.preventDefault();
    setStart(true);
  };

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

  const inGame = !isCompletedAllQuestions && !isLoading;
  const gameComplete = !isLoading && isCompletedAllQuestions;
  const loading = isLoading && !isCompletedAllQuestions;

  return (
    <QuizBackground backgroundImage={quiz?.bg}>
      <QuizContainer>
        <QuizLogo className="logo" />

        {!start && (
          <QuizForm
            name={name}
            title={quiz.title}
            description={quiz.description}
            handleStart={handleFormStart}
            handleChange={handleFormChange}
          />
        )}

        {start && (
          <>
            {loading && <Widget.Loading />}
            {gameComplete && (
              <Widget.Result user={name} points={points} hits={hits} />
            )}
            {inGame && (
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
          </>
        )}

        <Footer {...setShowAnimation({ delay: 0, duration: 0.5 })} />
      </QuizContainer>
    </QuizBackground>
  );
};

export default Quiz;
