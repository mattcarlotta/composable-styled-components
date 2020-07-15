import Subtitle from "~components/Body/Subtitle";
import Head from "~components/Navigation/Head";

const Demonstation = () => (
  <>
    <Head
      title="Demonstation"
      url="/demonstation"
      description="Learn how to use composable-styled-components"
      name="Demonstation"
    />
    <img
      css="display:block;margin: 30px auto; width: 750px;"
      src="demonstrationLogo.png"
      alt="demonstrationLogo"
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

export default Demonstation;
