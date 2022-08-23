import React, { useState } from "react";
import { Button } from "../components";
import { Dropdown, DropdownItem } from "../components/Dropdown";

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
    <>
      <h1>Hello world</h1>
      <Dropdown title={"Hello world"}>
        <DropdownItem to={"/Home"}>Item 1 </DropdownItem>
        <DropdownItem to={"/Login"}>Item 2 </DropdownItem>
        <DropdownItem to={"/Register"}>Item 3 </DropdownItem>
      </Dropdown>
      <Button onClick={showToastHandler}>click me</Button>
    </>
  );
};

export default HomePage;
