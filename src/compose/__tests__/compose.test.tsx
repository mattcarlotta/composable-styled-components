import * as React from "react";
import { mount } from "enzyme";
import { compose } from "../index";

const Component = compose.div()`
  width: 100%;
  height: 100%;
  color: ${(props: any) => props.color || "black"};
  background: ${(props: any) => props.background || "transparent"};
`;

describe("Compose Function", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(<Component />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("creates component properties", () => {
    expect(wrapper).toHaveDisplayName("constructWithOptions");
    expect(Component.target).toEqual("div");
    expect(Component.styledComponentId).toBeDefined();
  });

  it("sets component with styles", () => {
    expect(wrapper).toHaveStyleRule("height", "100%");
    expect(wrapper).toHaveStyleRule("width", "100%");
    expect(wrapper).toHaveStyleRule("color", "black");
    expect(wrapper).toHaveStyleRule("background", "transparent");
  });

  it("interops CSS via props", () => {
    wrapper.setProps({ color: "pink", background: "white" });
    expect(wrapper).toHaveStyleRule("color", "pink");
    expect(wrapper).toHaveStyleRule("background", "white");
  });
});
