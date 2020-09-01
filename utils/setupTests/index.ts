import jsdom from "jsdom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "../toHaveStyleRule";
import "jest-enzyme";

configure({ adapter: new Adapter() });

const { document } = new jsdom.JSDOM(
  "<!DOCTYPE html><body><div id='root'></div></body>"
).window;
global.document = document;
global.window = document.defaultView;
