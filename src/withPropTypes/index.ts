import { setStatic } from "../setStatic";

export const withPropTypes = (propTypes: Object) =>
  setStatic("propTypes", propTypes);
