import Widget from '../Widget';
import Select from '../Select';
import BackLinkArrow from '../BackLink';

interface Props {
  title: string;
  image: string;
  description: string;
  alternatives: string[];
  answer: number;
  questionIndex: number;
  totalQuestions: number;
  children: any;
  selectedAlt: boolean;
  handleAnswer(value: number): void;
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
  selectedAlt,
  children,
}: Props) => {


  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
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
          selectedAlt={selectedAlt}
        />
        {children}
      </Widget.Content>
    </Widget>
  )
};

export default QuestionWidget;
