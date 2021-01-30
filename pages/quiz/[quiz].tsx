import Quiz from '../../src/screens/Quiz';
import db from '../../db.json';

import { GetStaticPropsContext } from 'next';
import { QuizDB } from '../../src/interfaces/db';

export default function QuizPage({ quiz }: { quiz: number }) {
  return <Quiz quiz={db.quizzes[quiz]} />;
}

export function getStaticProps({ params }: GetStaticPropsContext) {
  const quiz = params ? parseInt((params.quiz as unknown) as string) : 0;
  return {
    props: {
      quiz,
    },
  };
}

export async function getStaticPaths() {
  try {
    const quizzes = await fetch(`http://localhost:3000/api/db`)
      .then((res) => (res.ok ? res.json() : null))
      .then((res) => res.quizzes);

    const getParamsFromQuizId = (quiz: QuizDB) => ({
      params: {
        quiz: String(quiz.id),
      },
    });
    const paths = quizzes.map(getParamsFromQuizId);

    return {
      paths,
      fallback: false,
    };
  } catch (err) {}
}
