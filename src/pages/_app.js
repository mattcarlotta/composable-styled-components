import Container from "~components/Body/Container";
import GlobalStylesheet from "~styles/globalStylesheet";
import Header from "~components/Navigation/Header";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <GlobalStylesheet />
    <Header />
    <Container>
      <Component {...pageProps} />
    </Container>
  </>
);

export default App;
