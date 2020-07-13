import { mapProps } from "../mapProps";
import { setDisplayName, wrapDisplayName } from "../displayName";

export const withProps = incomingProps => {
  const hoc = mapProps(props => ({
    ...(typeof incomingProps === "function"
      ? incomingProps(props)
      : incomingProps),
    ...props
  }));

  return process.env.NODE_ENV !== "production"
    ? BaseComponent =>
        setDisplayName(wrapDisplayName(BaseComponent, "withProps"))(
          hoc(BaseComponent)
        )
    : hoc;
};
