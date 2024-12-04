import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const StyledSelect = styled.select`
  padding: 0.2%;
  background-color: white;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: calc(4px + 1.5vw);
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  padding: 0.2%;
  background-color: white;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  width: 25rem;
`;

const shapes = ["cube", "cone", "sphere"];

interface ShapeSelectorProps {
  shape: string;
  setShape: (shape: string) => void;
  setTextureUrl: (url: string) => void;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({
  shape,
  setShape,
  setTextureUrl,
}) => {
  const handleShapeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShape(event.target.value);
  };

  const handleTextureUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTextureUrl(event.target.value);
  };

  return (
    <Container>
      <StyledSelect value={shape} onChange={handleShapeChange}>
        <option value="" disabled>
          Select a shape
        </option>
        {shapes.map((shape) => (
          <option key={shape} value={shape}>
            {shape}
          </option>
        ))}
      </StyledSelect>
      <StyledInput
        type="text"
        placeholder="Enter texture URL"
        onChange={handleTextureUrlChange}
      />
      <p style={{ color: "lightgray" }}>
        try: https://www.bu.edu/cs/files/2023/07/profile.jpg
      </p>
    </Container>
  );
};

export default ShapeSelector;
