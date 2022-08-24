import React, { useState } from "react";
import { Button } from "../components";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import { FormSelect } from "../components/Form";

import { Toast } from "../utils";

const HomePage = () => {
  const [cpt, setCpt] = useState(1);
  const showToastHandler = () => {
    Toast.show({
      type: "danger",
      text: "hello world " + cpt,
    });
    setCpt(cpt + 1);
  };

  return (
    <div style={{ width: "350px" }}>
      <h1>Hello world</h1>
      <Dropdown title={"Hello world"}>
        <DropdownItem to={"/Home"}>Item 1 </DropdownItem>
        <DropdownItem to={"/Login"}>Item 2 </DropdownItem>
        <DropdownItem to={"/Register"}>Item 3 </DropdownItem>
      </Dropdown>
      <Button onClick={showToastHandler} block className="mt-1">
        click me
      </Button>
      <hr />

      <FormSelect className="mt-2">
        <option value="0">---- Choose the city ----</option>
        <option value="Rabat">Rabat</option>
        <option value="New York">New York</option>
        <option value="Paris">Paris</option>
        <option value="London">London</option>
      </FormSelect>
    </div>
  );
};

export default HomePage;
