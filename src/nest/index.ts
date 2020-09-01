import { createFactory } from "../createFactory";
import { getDisplayName } from "../displayName";
import inDev from "../inDev";

export const nest = (...Components) => {
  const factories = Components.map(createFactory);
  const Nest = ({ children, ...props }) =>
    factories.reduceRight((child, factory) => factory(props, child), children);

  /* istanbul ignore next */
  if (inDev) {
    const displayNames = Components.map(getDisplayName);
    Nest.displayName = `nest(${displayNames.join(", ")})`;
  }

  return Nest;
};
