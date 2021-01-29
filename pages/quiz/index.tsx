import Quiz from "../../src/screens/Quiz";
import db from '../../db.json';

export default function QuizPage() {
  return <Quiz quiz={db.quizzes[0]} />
}