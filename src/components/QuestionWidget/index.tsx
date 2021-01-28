import Widget from '../Widget';
import Select from '../Select';

interface Props {
  title: string;
  image: string;
  description: string;
  alternatives: string[];
  answer: number;
  questionIndex: number;
  totalQuestions: number;
  children: any;
  handleAnswer(name: string, value: boolean): void;
}

const QuestionWidget = ({
  title,
  image,
  description,
  alternatives,
  answer,
  questionIndex,
  totalQuestions,
  handleAnswer,
  children,
}: Props) => {


  return (
    <Widget>
      <Widget.Header>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
  
      <Widget.Image src={image} alt="QuizImage" />
  
      <Widget.Content>
        <h2>{title}</h2>
        <p style={{ margin: '1rem 0' }}>{description}</p>
  
        <Select
          alternatives={alternatives}
          questionId={questionIndex}
          handleAnswer={handleAnswer}
          answer={answer}
        />
        {children}
      </Widget.Content>
    </Widget>
  )
};

export default QuestionWidget;
