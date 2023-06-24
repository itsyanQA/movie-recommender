import { useLocation } from "react-router-dom";
import React from "react";

export function Movie() {
  console.log(useLocation);
  return <h1>this is a movie</h1>;
}
