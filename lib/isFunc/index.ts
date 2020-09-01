import { CSSProperties } from "../types";

type isFuncProps = {
  x: () => void | CSSProperties;
};

const isFunc = (x: isFuncProps) => typeof x === "function";

export default isFunc;
