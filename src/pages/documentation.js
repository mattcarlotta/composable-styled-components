import Subtitle from "~components/Body/Subtitle";
import Head from "~components/Navigation/Head";

const Documentation = () => (
  <>
    <Head
      title="Documentation"
      url="/documentation"
      description="Learn the basics of composable-styled-components"
      name="Documentation"
    />
    <img
      css="display:block;margin: 30px auto; width: 750px;"
      src="documentationLogo.png"
      alt="documentationLogo"
    />
    <Subtitle>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet.
    </Subtitle>
  </>
);

export default Documentation;
