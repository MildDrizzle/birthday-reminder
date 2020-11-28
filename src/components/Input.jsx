import React from "react";
import styled from "styled-components";
const Input = ({ id, type, value, placeholder, setName }) => {
  return (
    <StyledDiv>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setName(event.target.value)}
      />
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 30%;
  height: 56px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }

  input {
    width: 100%;
    height: 56px;
    position: relative;
    padding: 0px 16px;
    border: none;
    border-radius: 4px;
    font-family: "Gotham SSm A", "Gotham SSm B", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    background-color: transparent;
    color: #282828;
    outline: none;
    box-shadow: 0px 4px 20px 0px transparent;
    transition: 0.3s background-color ease-in-out, 0.3s box-shadow ease-in-out,
      0.1s padding ease-in-out;
    -webkit-appearance: none;
    cursor: pointer;
  }
  input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  input::-moz-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  input:-ms-input-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  input:-moz-placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default Input;
