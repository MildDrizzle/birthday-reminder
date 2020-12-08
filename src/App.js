import React, { useState } from "react";
import AddBirthday from "./components/AddBirthday";
import Birthday from "./components/Birthday";
import Today from "./components/Today";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import UpcomingBirthdays from "./components/UpcomingBirthdays";
import Tommorow from "./components/Tommorow";

function App() {
  const [birthdays, setBirthdays] = useState([]);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/addbirthday">
          <AddBirthday birthdays={birthdays} setBirthdays={setBirthdays} />
        </Route>
        <Route path="/upcoming">
          <UpcomingBirthdays />
        </Route>
        <Route path="/today">
          <Today birthdays={birthdays} setBirthdays={setBirthdays} />
        </Route>
        <Route path="/tommorow">
          <Tommorow birthdays={birthdays} setBirthdays={setBirthdays} />
        </Route>
        <Route path="/">
          <Birthday birthdays={birthdays} setBirthdays={setBirthdays} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
