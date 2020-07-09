import styled from "styled-components";
import { extend } from "~lib";

export const compose = (...f) => c => s =>
  extend(...f)(styled(c)`
    ${s};
  `);
