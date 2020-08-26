import Subtitle from "~components/Body/Subtitle";
import Title from "~components/Body/Title";
import Head from "~components/Navigation/Head";
import V001 from "~components/Releases/V001";

const Releases = () => (
  <>
    <Head
      title="Releases"
      url="/releases"
      description="Information on new releases for composable-styled-components"
      name="Releases"
    />
    <Title>Releases</Title>
    <Subtitle textalign="center">
      You can find the latest releases and any change logs here.
    </Subtitle>
    <V001 />
  </>
);

export default Releases;
