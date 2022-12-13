import React from "react";
import styled from "styled-components";
import ToDoList from "./components/ToDoList";
import "../src/styles/ResetCss.css";

export default function App() {
  return (
    <Container>
      <h1>To-Do List</h1>
      <ToDoList />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(212, 48, 252, 1) 0%,
    rgba(194, 143, 0, 1) 100%
  );
  display: flex;
  flex-direction: column;
  padding-top: 8vw;
  align-items: center;
  box-sizing: border-box;

  h1 {
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
