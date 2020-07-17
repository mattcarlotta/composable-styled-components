import * as React from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/router";
import Dot from "~components/Body/Dot";
import Flex from "~components/Body/Flex";
import FlexStart from "~components/Body/FlexStart";
import FlexEnd from "~components/Body/FlexEnd";
import Logo from "~components/Body/Logo";
import Link from "~components/Navigation/Link";
import {
  compose,
  extend,
  setDisplayName,
  withAttributes,
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
    color: #f1f1f1;
    z-index: 1000;
    border-bottom: 1px solid #ebebeb;
  `)
)(Flex);

const SearchBox = compose(
  setDisplayName("NavContainer"),
  withAttributes({
    name: "search-box",
    placeholder: "Search...",
    type: "input"
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
        <Link
          ariaLabel="logo"
          hover={false}
          nopadding
          light
          href="/"
          style={{ height: "48px" }}
        >
          <Logo>{`(</>)`}</Logo>
        </Link>
        <nav>
          {["documentation", "demonstrations", "releases"].map(page => (
            <React.Fragment key={page}>
              <Link
                ariaLabel={`header ${page} tab`}
                active={activeTab.indexOf(page) > -1}
                hover
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
        <label htmlFor="search-box">
          <SearchBox onChange={handleSearchChange} value={searchText} />
        </label>
      </FlexEnd>
    </NavContainer>
  );
};

export default Header;
