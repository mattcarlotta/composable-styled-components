import Subtitle from "~components/Body/Subtitle";
import Head from "~components/Navigation/Head";

const Releases = () => (
  <>
    <Head
      title="Releases"
      url="/releases"
      description="Information on new releases for composable-styled-components"
      name="Releases"
    />
    <img
      css="display:block;margin: 30px auto;width: 100%;max-width: 460px;"
      src="releasesLogo.png"
      alt="releasesLogo"
    />
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
