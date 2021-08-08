/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";

import React from "react";

function Counter() {
  const onIncrease = () => {
    console.log("+1");
  };
  const onDecrease = () => {
    console.log("-1");
  };
  return (
    <div>
      <h1>0</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
