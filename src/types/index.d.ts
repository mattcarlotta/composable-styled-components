import type {
  ComponentClass,
  ForwardRefExoticComponent,
  ComponentType,
  CSSProperties,
  JSXElementConstructor,
  FunctionComponent as FC,
  RefAttributes,
  ReactElement,
  ReactNode
} from "react";

import type { StyledComponent } from "styled-components";

type Interpolation =
  | ((props: Object) => Interpolation)
  | string
  | {}
  | ComponentType<any>
  | Interpolation[];

type IncomingProps = ((props: Object) => Interpolation) | string | {};

type Styles = string[] | {} | ((props: Object) => Interpolation);

type Tag = string | ComponentType<any>;

export {
  ComponentClass,
  ComponentType,
  CSSProperties,
  IncomingProps,
  Interpolation,
  FC,
  ForwardRefExoticComponent,
  JSXElementConstructor,
  RefAttributes,
  ReactElement,
  ReactNode,
  Styles,
  StyledComponent,
  Tag
};
