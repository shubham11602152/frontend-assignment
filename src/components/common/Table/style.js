import styled from "styled-components";

export const EmptyRow = styled.tr`
  & td {
    visibility: hidden;
  }
`;

export const Message = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 1rem;
  background-color: #f9f9f9;
`;
