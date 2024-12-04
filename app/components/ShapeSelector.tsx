import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;

const StyledSelect = styled.select`
  padding: 0.2%;
  background-color: white;
  border: 1px solid blue;
  border-radius: 4px;
  font-size: calc(4px + 1.5vw);
`;

const shapes = ["cube", "cone", "sphere"];

interface ShapeSelectorProps {
  shape: string;
  setShape: (shape: string) => void;
}

const ShapeSelector: React.FC<ShapeSelectorProps> = ({ shape, setShape }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShape(event.target.value);
  };

  return (
    <Container>
      <StyledSelect value={shape} onChange={handleChange}>
        <option value="" disabled>
          Select a shape
        </option>
        {shapes.map((shape) => (
          <option key={shape} value={shape}>
            {shape}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};

export default ShapeSelector;
