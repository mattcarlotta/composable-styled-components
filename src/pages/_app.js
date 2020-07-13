import Container from "~components/Body/Container";

const App = ({ Component, pageProps }) => (
  <Container>
    <Component {...pageProps} />
  </Container>
);

export default App;
