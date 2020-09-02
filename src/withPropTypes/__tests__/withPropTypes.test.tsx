import * as React from "react";
import { mount } from "enzyme";
import PropTypes from "prop-types";
import { compose } from "../../index";
import { withPropTypes } from "../index";

const Button = compose.button(
  withPropTypes({
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  })
)`
  width: 100%;
`;

describe("WithPropTypes Function", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <Button type="button" onClick={() => {}}>
        Hello world
      </Button>
    );
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("throws warnings if props are invalid", () => {
    global.console.error = jest.fn();
    wrapper.setProps({ onClick: null });

    expect(global.console.error)
      .toHaveBeenCalledWith(`Warning: Failed prop type: The prop \`onClick\` is marked as required in \`constructWithOptions\`, but its value is \`null\`.
    in constructWithOptions`);

    global.console.error.mockRestore();
  });
});
