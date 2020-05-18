import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  background-color: grey;
`;

export const HeaderItem = styled.div`
  padding: 1rem;
  height: 100%;
  width: 100%;
  &:hover {
    cursor: pointer;
    background-color: blue;
  }
`;
