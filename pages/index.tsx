import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import db from '../db.json';

import QuizBackground from '../src/layouts/QuizBackground';
import QuizContainer from '../src/layouts/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

const IndexPage = () => {
  const [user, setUser] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setUser(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    router.push(`/quiz?name=${user}`);
  };

  const isDisabled = !user.trim();
  
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <meta property="og:image" content={db.bg} key="ogimage" />
        <meta
          property="og:description"
          content="Descubra o quanto você conhece javascript"
          key="ogdescription"
        />

        <title>Javascript - Quiz</title>
      </Head>

      <QuizContainer>
        <QuizLogo className="logo" />
        <Widget>
          <Widget.Header>
            <h1>Javascript</h1>
            {/* <Widget.Christmas src="https://cdn.pixabay.com/photo/2021/01/03/23/40/christmas-5885920_1280.png" /> */}
          </Widget.Header>

          <Widget.Content>
            <p>Descubra o quanto você conhece javascript.</p>

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

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
              quam.
            </p>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>

      <GitHubCorner projectUrl="https://github.com/Nadno/aluraquiz" />
    </QuizBackground>
  );
};

export default IndexPage;
