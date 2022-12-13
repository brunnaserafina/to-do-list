import styled from "styled-components";

const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 70%;
    height: 40px;
    border-radius: 10px;
    border: none;
    text-align: center;
    font-size: 18px;
    margin: 15px 8px;
  }

  button {
    width: 10%;
    height: 40px;
    font-size: 16px;
    border-radius: 10px;
    background-color: pink;
    border: none;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
  }

  p {
    width: 80%;
    height: 26px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 18px;
    text-align: center;
    background-color: pink;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 15px;
  }

  span {
    cursor: pointer;
    color: purple;
  }
`;

export {Wrapper}