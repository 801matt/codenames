import React from "react";
import { White, Blue, DarkBlue } from "../../../colors";
import styled from "styled-components";

const InternalUseButton = styled.button`
  appearance: none;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem 2rem;
  background: ${Blue};
  color: ${White};
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background: ${DarkBlue};
  }
`;

const Button = ({ text, clicked }) => (
  <InternalUseButton onClick={clicked}>{text}</InternalUseButton>
);

export default Button;
