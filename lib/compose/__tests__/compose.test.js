import { compose } from "../index";

const Component = compose()("div")`
  width: 100%;
  height: 100%;
`;

describe("Compose Function", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Component />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("sets the correct Component properties", () => {
    expect(Component.displayName).toEqual("compose");
    expect(Component.target).toEqual("div");
    expect(Component.styledComponentId).toEqual(expect.any(String));
  });

  it("sets the Component with styles", () => {
    expect(wrapper).toHaveStyleRule("height", "100%");
    expect(wrapper).toHaveStyleRule("width", "100%");
  });
});
