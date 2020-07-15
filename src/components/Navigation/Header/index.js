import * as React from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import Dot from "~components/Body/Dot";
import Flex from "~components/Body/Flex";
import FlexStart from "~components/Body/FlexStart";
import FlexEnd from "~components/Body/FlexEnd";
import Link from "~components/Navigation/Link";
import {
  compose,
  extend,
  setDisplayName,
  withStyleAttributes,
  withStyles
} from "~lib";

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

const SearchBox = compose(
  setDisplayName("NavContainer"),
  withStyleAttributes({
    type: "input",
    placeholder: "Search..."
  })
)("input")`
  height: 35px;
  border-radius: 4px;
  border: 1px solid transparent;
  background: transparent;
  color: #03a9f3;
  font-size: 15px;

  &:focus {
    outline: 0;
  }

  ::placeholder {
    color: #888;
    font-size: 15px;
  }
`;

const Header = () => {
  const { pathname } = useRouter();
  const [searchText, setSearchText] = React.useState("");
  const [activeTab, setActiveTab] = React.useState(pathname);

  const handleSearchChange = React.useCallback(({ target: { value } }) => {
    setSearchText(value);
  }, []);

  React.useEffect(() => {
    setActiveTab(pathname);
  }, [pathname]);

  return (
    <NavContainer>
      <FlexStart>
        <Link nohover nomargin light href="/">
          <img
            css="vertical-align: bottom;height:35px;"
            src="composableIconWhite.png"
            alt="composableIconWhite"
          />
        </Link>
        <nav>
          {["documentation", "demonstration", "releases"].map(page => (
            <React.Fragment key={page}>
              <Link
                active={activeTab.indexOf(page) > -1}
                light
                href={`/${page}`}
                texttransform="capitalize"
              >
                {page}
              </Link>
              {page !== "releases" && <Dot />}
            </React.Fragment>
          ))}
        </nav>
      </FlexStart>
      <FlexEnd>
        <FaSearch style={{ marginRight: 8, fontSize: 15 }} />
        <SearchBox onChange={handleSearchChange} value={searchText} />
      </FlexEnd>
    </NavContainer>
  );
};

export default Header;
