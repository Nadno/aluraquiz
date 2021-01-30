import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";

import { setShowAnimation } from "../../utils/animations";

import Button from "../Button";
import Input from "../Input";
import Widget from "../Widget";

interface Props {
  id: number;
  title: string;
  description: string;
}

export default function QuizForm({ id, title, description }: Props) {
  const [user, setUser] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setUser(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push(`/quiz/${id}?name=${user}`);
  };

  const isDisabled = !user.trim() || !(id >= 0);

  return (
    <Widget {...setShowAnimation({ delay: 0, duration: 0.5 })}>
      <Widget.Header>
        <h1>{title}</h1>
        {/* <Widget.Christmas src="https://cdn.pixabay.com/photo/2021/01/03/23/40/christmas-5885920_1280.png" /> */}
      </Widget.Header>

      <Widget.Content>
        <p>{description}</p>

        <form onSubmit={handleSubmit}>
          <Input.Text
            id="name"
            name="name"
            value={user}
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
