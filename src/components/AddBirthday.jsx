import React, { useState } from "react";
import Input from "./Input";
import styled from "styled-components";

const AddBirthday = ({ birthdays, setBirthdays }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setBirthdays([...birthdays, { name, date }]);
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
        <button>Add Birthday to the List</button>
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

export default AddBirthday;
