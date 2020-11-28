import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledUl>
        <Link to="/">
          <StyledLi>View Birthdays</StyledLi>
        </Link>
        <Link to="/addbirthday">
          <StyledLi>Add Birthdays</StyledLi>
        </Link>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  font-size: 1rem;
  display: flex;
  /* fle    x-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
  }
`;

const StyledLi = styled.li`
  text-decoration: none;
  padding: 1rem 1rem;
  margin: 0rem 0.3rem;
  background: #6f00ff;
  border-radius: 10rem;
  transition: 0.5s ease-in-out;
  box-shadow: 0.01rem 0.01rem 0.1rem 0.1rem rgba(0, 0, 0, 0.8);
  &:hover {
    color: #6f00ff;
    background: black;
  }
  &:focus {
    outline: none;
  }
`;

export default Navbar;
