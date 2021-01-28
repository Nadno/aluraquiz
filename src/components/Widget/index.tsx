import styled from 'styled-components';

const Widget: any = styled.div`
  margin: 24px 0;
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
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  
  h1 {
    margin-bottom: 2rem;
  }

  ul {
    list-style: none;
  }
`;

Widget.Image = styled.img`
  width: 100%;
  /* height: 10rem; */
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

Widget.Result = ({ points, acertos }: { points: number; acertos:number; }) => (
  <Widget>
    <Widget.Header>
      <h2>Quiz completo!</h2>
    </Widget.Header>

    <Widget.Content>
      <p>Total de acertos: {acertos}</p>
      <p>Pontuação final: {points}</p>
    </Widget.Content>
  </Widget>
)

export default Widget;
