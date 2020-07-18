import { createFactory } from "../createFactory";
import { getDisplayName } from "../displayName";
import inProduction from "../inProduction";

export const nest = (...Components) => {
  const factories = Components.map(createFactory);
  const Nest = ({ children, ...props }) =>
    factories.reduceRight((child, factory) => factory(props, child), children);

  if (inProduction) {
    const displayNames = Components.map(getDisplayName);
    Nest.displayName = `nest(${displayNames.join(", ")})`;
  }

  return Nest;
};
