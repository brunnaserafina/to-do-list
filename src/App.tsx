import styled from "styled-components";
import "../src/ResetCss.css";

export default function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  height: 100vh;
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  background: #0052d4;
`;
