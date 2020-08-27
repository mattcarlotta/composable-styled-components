import { extend, setDisplayName, withStyles } from "~lib";
import Flex from "~components/Body/Flex";

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

export default NavContainer;
