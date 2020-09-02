import * as React from "react";
import { mount } from "enzyme";
import { compose, css, extend } from "../../index";
import { withStyles } from "../index";

const Header = compose.h1()`
  color: white;
`;

const ExtendHeader = extend(withStyles({ color: "orange" }))(Header);

const InteropObjectHeader = extend(
  withStyles((props: any) => ({ color: props.email ? "pink" : "black" }))
)(Header);

const InteropCSSHeader = extend(
  withStyles(css`
    color: ${(props: any) => props.color};
  `)
)(Header);

describe("WithProps Function", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <>
        <Header />
        <ExtendHeader />
        <InteropObjectHeader email />
        <InteropCSSHeader color="blue" />
      </>
    );
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("extends component styles", () => {
    expect(wrapper.find("h1").at(1)).toHaveStyleRule("color", "orange");
  });

  it("interops component props via function returning an object", () => {
    expect(wrapper.find("h1").at(2)).toHaveStyleRule("color", "pink");
  });

  it("interops component props via css helper", () => {
    expect(wrapper.find("h1").at(3)).toHaveStyleRule("color", "blue");
  });
});