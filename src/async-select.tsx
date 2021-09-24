/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from "react";
import AsyncReactSelect from "react-select/async";
import ChakraReactSelect from "./chakra-react-select";
import { ChakraSelectProps } from "./types";

const AsyncSelect = forwardRef<any, ChakraSelectProps>((props, ref) => (
  <ChakraReactSelect {...props}>
    <AsyncReactSelect ref={ref} />
  </ChakraReactSelect>
));

export default AsyncSelect;
