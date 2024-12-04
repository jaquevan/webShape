"use client";
import ShapeSelector from "@/app/components/ShapeSelector";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Scene from "./components/Scene";
import { useState } from "react";

const Title = styled(Typography)`
  padding: 1%;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Home() {
  const [shape, setShape] = useState("");
  console.log(shape);
  return (
    <>
      <Title variant="h1">Three.js Demo</Title>
      <ShapeSelector shape={shape} setShape={setShape} />
      <StyledDiv>
        <Scene shape={shape} />
      </StyledDiv>
    </>
  );
}
