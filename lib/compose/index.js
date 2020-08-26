import styled, { css } from "styled-components";
import { extend } from "../extend";

export const compose = (...f) => c => (...s) => {
  return extend(...f)(styled(c)`
    ${() => css(...s)};
  `);
};
