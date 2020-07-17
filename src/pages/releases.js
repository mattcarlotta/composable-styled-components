import Subtitle from "~components/Body/Subtitle";
import Title from "~components/Body/Title";
import Head from "~components/Navigation/Head";

const Releases = () => (
  <>
    <Head
      title="Releases"
      url="/releases"
      description="Information on new releases for composable-styled-components"
      name="Releases"
    />
    <Title>Releases</Title>
    <Subtitle textalign="left">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </Subtitle>
  </>
);

export default Releases;
