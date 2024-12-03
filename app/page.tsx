"use client"
import ShapeSelector from "@/app/components/ShapeSelector";
import Cube from "@/app/components/Cube";
import styled from "styled-components";
import {Typography} from "@mui/material";

const Title = styled(Typography)`
    padding: 1%;
    text-align:center;
`;

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export default function Home() {
  return (
      <>
          <Title variant="h1">Three.js Demo</Title>
          <ShapeSelector/>
            {/*this is here as filler for now, we can add more shapes and makde it conditional based on the input*/}
          <StyledDiv>
              <Cube/>
          </StyledDiv>



      </>

  );
}
