import { createFactory } from "../createFactory";
import { getDisplayName } from "../displayName";
import inDev from "../inDev";
import { ComponentType } from "../types";

export const nest = (...Components: ComponentType[]) => {
  const factories = Components.map(createFactory);
  const Nest = ({ children, ...props }: { children?: any }) =>
    factories.reduceRight((child, factory) => factory(props, child), children);

  /* istanbul ignore next */
  if (inDev) {
    const displayNames = Components.map(getDisplayName);
    Nest.displayName = `nest(${displayNames.join(", ")})`;
  }

  return Nest;
};
