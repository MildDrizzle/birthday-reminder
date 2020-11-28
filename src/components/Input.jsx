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

const StyledDiv = styled.div``;

export default Input;
