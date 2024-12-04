"use client";
import ShapeSelector from "@/app/components/ShapeSelector";
import styled from "styled-components";
import { Typography } from "@mui/material";
import Scene from "./components/Scene";
import { useState } from "react";

const Title = styled(Typography)`
  padding: 1%;
  text-align: center;
    color: darkorange;
    background-color: slategrey;
    margin-bottom: 1%;
`;

const StyledDiv = styled.div`
  margin-top: -6rem;
  display: flex;
  justify-content: center;
`;

export default function Home() {
  const [shape, setShape] = useState("");
  const [textureUrl, setTextureUrl] = useState("");

  return (
    <>
      <Title variant="h1">Three.js Demo</Title>
      {/* Select shapes and textures */}
      <ShapeSelector
        shape={shape}
        setShape={setShape}
        setTextureUrl={setTextureUrl}
      />
      <StyledDiv>
        {/* this component is where the magic happens */}
        <Scene shape={shape} textureUrl={textureUrl} />
      </StyledDiv>
    </>
  );
}
