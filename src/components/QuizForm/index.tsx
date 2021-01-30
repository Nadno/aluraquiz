import { ChangeEvent, FormEvent } from 'react';

import { setShowAnimation } from '../../utils/animations';

import Button from '../Button';
import Input from '../Input';
import Widget from '../Widget';

interface Props {
  name: string;
  title: string;
  description: string;
  handleStart(e: FormEvent): void;
  handleChange(e: ChangeEvent): void;
}

export default function QuizForm({
  name,
  title,
  description,
  handleStart,
  handleChange,
}: Props) {
  const isDisabled = !name.trim();

  return (
    <Widget {...setShowAnimation({ delay: 0, duration: 0.5 })}>
      <Widget.Header>
        <h1>Quiz - {title}</h1>
        {/* <Widget.Christmas src="https://cdn.pixabay.com/photo/2021/01/03/23/40/christmas-5885920_1280.png" /> */}
      </Widget.Header>

      <Widget.Content>
        <p>{description}</p>

        <form onSubmit={handleStart}>
          <Input.Text
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Digite um nome para jogar :)"
          />

          <Button type="submit" disabled={isDisabled}>
            JOGAR
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}
