import styled from "styled-components";
import { compose } from "~lib";

export const build = (...f) => c => s =>
  compose(...f)(styled(c)`
    ${s};
  `);
