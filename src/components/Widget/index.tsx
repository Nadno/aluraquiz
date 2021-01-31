import styled from 'styled-components';
import BackLinkArrow from '../BackLink';
import Link from '../Link';

const Widget: any = styled.div`
  margin: 1.5rem 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1;
  }

  ul {
    list-style: none;
  }
`;

Widget.Christmas = styled.img`
  position: absolute;
  height: 5rem;

  bottom: 0;
  right: 0;
  z-index: 10;
`;

Widget.Header = styled.header`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.8rem 3.2rem;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  h1 {
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
  }
`;

Widget.Image = styled.img`
  width: 100%;
  height: 15rem;
`;

Widget.Loading = () => (
  <Widget>
    <Widget.Header>
      <h2>Carregando...</h2>
    </Widget.Header>

    <Widget.Content>
      <p>[Desafio do Loading]</p>
    </Widget.Content>
  </Widget>
);

interface ResultProps {
  points: number;
  hits: number;
  user: string;
}

Widget.Result = ({ points, hits, user }: ResultProps) => (
  <Widget>
    <Widget.Header>
      <BackLinkArrow href="/" />
      <h2>Quiz completo!</h2>
    </Widget.Header>

    <Widget.Content>
      <h3>Parabéns {user}</h3>
      <p>Total de acertos: {hits}</p>
      <p>Pontuação final: {points}</p>
    </Widget.Content>
  </Widget>
);

Widget.Topic = styled(Link)`
  width: 100%;
  display: block;
  padding: 1.5rem;

  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 1rem;

  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
`;

export default Widget;
