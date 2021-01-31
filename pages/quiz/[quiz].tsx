import Quiz from '../../src/screens/Quiz';

import { GetStaticPropsContext } from 'next';
import { QuizDB } from '../../src/interfaces/db';
import Head from 'next/head';

export default function QuizPage({ quiz }: { quiz: QuizDB }) {
  return (
    <>
      <Head>
        <meta property="og:image" content={quiz?.bg} key="ogimage" />
        <meta
          property="og:description"
          content={quiz?.description}
          key="ogdescription"
        />

        <title>Quiz - {quiz?.title}</title>
      </Head>

      <Quiz quiz={quiz} />
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const quizId = params ? Number(params.quiz as string) : 0;
  const quiz = await fetch(`https://aluraquiz.nadno.vercel.app/api/db`)
    .then((res) => (res.ok ? res.json() : null))
    .then((res) => res.quizzes[quizId]);

  return {
    props: {
      quiz,
    },
  };
}

export async function getStaticPaths() {
  try {
    const quizzes = await fetch(`https://aluraquiz.nadno.vercel.app/api/db`)
      .then((res) => (res.ok ? res.json() : null))
      .then((res) => res.quizzes);

    const getParamsFromQuizId = (quiz: QuizDB, index: number) => ({
      params: {
        quiz: String(quiz.id || index),
      },
    });
    const paths = quizzes.map(getParamsFromQuizId);

    return {
      paths,
      fallback: false,
    };
  } catch (err) {}
}
