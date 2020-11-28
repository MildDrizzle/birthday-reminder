import React, { useState } from "react";

import AddBirthday from "./components/AddBirthday";
import Birthday from "./components/Birthday";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  const [birthdays, setBirthdays] = useState([
    { id: 1, name: "Kishan Sheth", date: "21 APril" },
  ]);

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/addbirthday">
          <AddBirthday birthdays={birthdays} setBirthdays={setBirthdays} />
        </Route>
        <Route path="/">
          <Birthday birthdays={birthdays} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
