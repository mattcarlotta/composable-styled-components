import * as React from "react";

export const createFactory = (Type: React.ComponentType<any>) =>
  React.createElement.bind(null, Type);
