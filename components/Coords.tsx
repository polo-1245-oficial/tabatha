import { useState } from "react";
import styled from "styled-components";

export function Coordnates(props: { coords: { lat: number; lon: number } }) {
  const [showingCoords, setShowingCoords] = useState(false);

  return (
    <CoordsText>
      {props.coords.lat && props.coords.lon
        ? `La ubicación está configurada.`
        : "La ubicación no está configurada."}
      {showingCoords && ` (${props.coords.lat}, ${props.coords.lon})`}
      {props.coords.lat && props.coords.lon ? (
        <ShowButton onClick={() => setShowingCoords(!showingCoords)}>
          {showingCoords ? "Ocultar" : "Visualizar"}
        </ShowButton>
      ) : (
        <></>
      )}
    </CoordsText>
  );
}

const ShowButton = styled.p`
  margin: 0;
  margin-left: 5px;
  opacity: 0.5;
  user-select: none;

  :hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;

const CoordsText = styled.p`
  display: flex;
  margin: 5px 0 0px 0;
`;
