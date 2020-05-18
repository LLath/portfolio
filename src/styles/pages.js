import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  background-color: grey;
  div:first-child {
    margin-left: auto;
  }
  div:last-child {
    margin-right: auto;
  }
`;

export const HeaderItem = styled.div`
  padding: 1rem;
  height: 100%;
  margin: 0 1rem 0 1rem;
  &:hover {
    cursor: pointer;
    background-color: blue;
  }
`;

export const Body = styled.div`
  width: 60%;
  margin: auto;
  padding: 1rem;
  display: flex;
  background-color: yellow;
`;
