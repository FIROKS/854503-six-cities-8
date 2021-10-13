import Main from '../main/main';

type AppProps = {
  cards: JSX.Element[];
}

function App({cards}: AppProps): JSX.Element {
  return (
    <Main cards = {cards}/>
  );
}

export default App;
