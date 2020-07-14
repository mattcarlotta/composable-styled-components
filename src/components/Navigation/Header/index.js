import Dot from "~components/Body/Dot";
import Flex from "~components/Body/Flex";
import FlexStart from "~components/Body/FlexStart";
import FlexEnd from "~components/Body/FlexEnd";
import Link from "~components/Navigation/Link";
import { extend, setDisplayName, withStyles } from "~lib";

const NavContainer = extend(
  setDisplayName("NavContainer"),
  withStyles(`
    position: fixed;
    top: 0;
    height: 50px;
    background: #222222;
    padding: 0 40px;
    color: #eee;
  `)
)(Flex);

const Header = () => {
  return (
    <NavContainer>
      <FlexStart>
        <Link nomargin light href="/">
          <img
            css="vertical-align: bottom;height:35px;margin-right: 20px;"
            src="composableIconWhite.png"
            alt="composableIconWhite"
          />
        </Link>
        <nav>
          <Link light href="/docs" asHref="/docs">
            Documentation
          </Link>
          <Dot />
          <Link light href="/demo" asHref="/demo">
            Demo
          </Link>
          <Dot />
          <Link light href="/releases" asHref="/releases">
            Releases
          </Link>
        </nav>
      </FlexStart>
      <FlexEnd>
        <div>Search...</div>
      </FlexEnd>
    </NavContainer>
  );
};

export default Header;
