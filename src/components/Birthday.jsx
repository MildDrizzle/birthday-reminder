import React, { useEffect } from "react";
import styled from "styled-components";
import male from "../avatar/boys/5.png";
import female from "../avatar/girls/4.png";

const Birthday = ({ birthdays, setBirthdays }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const sortByMonth = () => {
    const birthdaysVar = [...birthdays].sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    return birthdaysVar;
  };

  useEffect(() => {
    setBirthdays(sortByMonth());
  }, [birthdays, setBirthdays]);

  return (
    <StyledCards>
      <h1>All Birthdays</h1>
      <StyledContainer>
        {birthdays.map((birthday) => (
          <StyledCard key={birthday.id}>
            <div>
              <span>
                <img src={birthday.gender === "male" ? male : female} alt="" />
              </span>
              <span>
                <h3>{birthday.name}</h3>
                <p>
                  {birthday.day} {months[birthday.month - 1]}
                </p>
              </span>
            </div>
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
  h1 {
    color: white;
    text-transform: uppercase;
  }
`;

const StyledContainer = styled.div`
  min-height: 10rem;
  width: 40%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledCard = styled.div`
  min-height: 6rem;
  background: rgba(111, 0, 255, 0.7);
  width: 60%;
  margin: 0.2rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
  }
  span:first-of-type {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50rem;
    overflow: hidden;
    margin-left: 0.3rem;
  }
  span > img {
    height: 4rem;
    width: 4rem;
    /* padding-right: 0.3rem; */
    margin: 10px 10px 10px 10px;
    display: block;
  }
  h3 {
    margin: 0.1rem 1rem;
    color: white;
    text-transform: uppercase;
  }
  p {
    margin: 0.1rem 1rem;
    color: white;
    text-transform: uppercase;
  }
`;

export default Birthday;
