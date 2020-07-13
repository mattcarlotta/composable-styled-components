import React from "react";
import Button from "~components/Body/Button";
import BuiltWithAttributes from "~components/Body/BuiltWithAttributes";
import ExtendedButton from "~components/Body/ExtendedButton";
import ExtendedWithAttributes from "~components/Body/ExtendedWithAttributes";
import InterpolatedButton from "~components/Body/InterpolatedButton";
import Head from "~components/Navigation/Head";

const App = () => (
  <>
    <Head title="Home" />
    <img
      css="display:block;margin: 0 auto;width: 700px;"
      src="https://i.imgur.com/eSJeEMu.png"
      alt="composableLogo"
    />
    <p css="margin-top: 0;margin-bottom: 30px;">
      A lightweight composable wrapper for styled-components
    </p>
    <Button>Button</Button>
    <ExtendedButton>Extended Button</ExtendedButton>
    <InterpolatedButton>Interpolated Button (no action)</InterpolatedButton>
    <InterpolatedButton
      resize
      onClick={() => alert("Extended interpolated button w/props!")}
    >
      Extended Interpolated Button w/Props
    </InterpolatedButton>
    <ExtendedWithAttributes>Extended With Attributes</ExtendedWithAttributes>
    <BuiltWithAttributes>Built With Attributes</BuiltWithAttributes>
  </>
);

export default App;
