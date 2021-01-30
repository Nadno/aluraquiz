import { useEffect, useState } from 'react';

import { setShowAnimation } from '../src/utils/animations';

import Head from 'next/head';
import db from '../db.json';
import QuizBackground from '../src/layouts/QuizBackground';
import QuizContainer from '../src/layouts/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import QuizForm from '../src/components/QuizForm';
import { QuizDB } from '../src/interfaces/db';
import QuizWidget from '../src/components/QuizWidget';

const IndexPage = () => {
  const [quiz, setQuiz] = useState({
    title: '',
    description: '',
    id: -1,
    bg: '',
  });
  const [quizzes, setQuizzes] = useState<QuizDB[]>([]);

  useEffect(getQuizzes, []);

  function getQuizzes() {
    try {
      fetch(`http://localhost:3000/api/db`)
        .then((res) => (res.ok ? res.json() : null))
        .then((res) => {
          const quizzes = res.quizzes.map((quiz) => {
            delete quiz.questions;
            return quiz;
          });

          setQuizzes(quizzes);
        });
    } catch (err) {}
  }

  const selectQuiz = (quiz: any) => {
    setQuiz(quiz);
  };

  return (
    <QuizBackground backgroundImage="">
      <Head>
        <meta property="og:image" content={db.quizzes[0].bg} key="ogimage" />
        <meta
          property="og:description"
          content="Descubra o quanto você conhece javascript"
          key="ogdescription"
        />

        <title>Javascript - Quiz</title>
      </Head>

      <QuizContainer>
        <QuizLogo className="logo" />
        <QuizForm
          id={quiz.id}
          title={quiz.title}
          description={quiz.description}
        />

        <Widget {...setShowAnimation({ delay: 0.2, duration: 0.5 })}>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <ul>
              {db.external.map((link) => {
                const prepareUrl = link
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '');
                const [repoName, user] = prepareUrl.split('.');

                const repoAndUser = `${repoName} - ${user}`;

                return (
                  <li key={repoAndUser}>
                    <Widget.Topic
                      href={`/quiz/external/${repoName}___${user}`}
                      title={repoAndUser}
                    >
                      {repoAndUser}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
        </Widget>

        <Footer {...setShowAnimation({ delay: 0.4, duration: 0.5 })} />
      </QuizContainer>

      <QuizContainer.Grid>
        {quizzes.length &&
          quizzes.map((quiz) => {
            return (
              <QuizWidget
                bg={quiz.bg}
                id={quiz.id}
                title={quiz.title}
                description={quiz.description}
                handleClick={() => selectQuiz(quiz)}
                key={quiz.id}
              />
            );
          })}
      </QuizContainer.Grid>

      <GitHubCorner projectUrl="https://github.com/Nadno/aluraquiz" />
    </QuizBackground>
  );
};

export default IndexPage;
