import React from "react";
import styled from "styled-components";

const Birthday = ({ birthdays }) => {
  return (
    <StyledCards>
      <StyledContainer>
        <h1>All Birthdays</h1>
        {birthdays.map((birthday) => (
          <StyledCard>
            <h3>{birthday.name}</h3>
            <p>{birthday.date}</p>
          </StyledCard>
        ))}
      </StyledContainer>
    </StyledCards>
  );
};

const StyledCards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledContainer = styled.div`
  width: 40%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCard = styled.div`
  background: rgba(255, 255, 255, 1);
  width: 60%;
  margin: 0.2rem;
  border-radius: 20rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    margin: 0.1rem;
  }
  p {
    margin: 0;
  }
`;

export default Birthday;
