import Container from "~components/Body/Container";
import GlobalStylesheet from "~styles/globalStylesheet";
import Header from "~components/Navigation/Header";

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStylesheet />
    <Header />
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
);

export default App;
