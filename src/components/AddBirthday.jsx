import React, { useState } from "react";
import Input from "./Input";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const AddBirthday = ({ birthdays, setBirthdays }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setBirthdays([...birthdays, { id: uuidv4(), name, date }]);
    setName("");
    setDate("");
  };

  return (
    <div>
      <h3>Add birthday</h3>
      <StyledForm onSubmit={handleFormSubmit}>
        <Input
          value={name}
          placeholder="Name"
          type="text"
          id="name"
          setName={setName}
        />
        <Input
          value={date}
          placeholder="Pick a Date"
          type="date"
          id="date"
          setName={setDate}
        />
        <StyledButton>Add Birthday to the List</StyledButton>
      </StyledForm>
    </div>
  );
};

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  text-decoration: none;
  font-family: "Josefin Sans", sans-serif;
  font-size: large;
  color: white;
  text-transform: uppercase;
  padding: 2rem 2rem;
  margin: 2rem;
  background: #6f00ff;
  border: none;
  border-radius: 10rem;
  transition: 0.5s ease-in-out;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem rgba(0, 0, 0, 0.8);
  &:hover {
    color: #6f00ff;
    background: black;
  }
  &:focus {
    outline: none;
  }
`;

export default AddBirthday;
