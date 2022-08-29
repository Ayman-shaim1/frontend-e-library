import React, { useState } from "react";
import { Button } from "../components";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import { FormSelect } from "../components/Form";

import { Toast, Alert, Dialog } from "../utils";

const HomePage = () => {
  const [cpt, setCpt] = useState(1);

  const showToastHandler = () => {
    Toast.show({
      type: "main",
      text: "hello world " + cpt,
    });
    setCpt(cpt + 1);
  };

  const showAlertHandler = () => {
    Alert.show({
      type: "danger",
      title: "Hello world",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi illum
      modi nobis provident perferendis, molestias, facilis alias maiores nisi
      praesentium eos possimus quisquam voluptatem asperiores!`,
    });
  };

  const showDialogHandler = () => {
    Dialog.show({
      title: "Hello world",
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi illum
      modi nobis provident perferendis, molestias, facilis alias maiores nisi
      praesentium eos possimus quisquam voluptatem asperiores!`,
      onYes: () =>
        Alert.show({
          type: "success",
          title: "Hello world",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi illum
        modi nobis provident perferendis, molestias, facilis alias maiores nisi
        praesentium eos possimus quisquam voluptatem asperiores!`,
        }),
      onNo: () =>
        Alert.show({
          type: "danger",
          title: "Hello world",
          message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas animi illum
        modi nobis provident perferendis, molestias, facilis alias maiores nisi
        praesentium eos possimus quisquam voluptatem asperiores!`,
        }),
    });
  };
  return (
    <div style={{ width: "300px" }}>
      <h1>Hello world</h1>
      <Dropdown title={"Hello world"}>
        <DropdownItem to={"/Home"}>Item 1 </DropdownItem>
        <DropdownItem to={"/Login"}>Item 2 </DropdownItem>
        <DropdownItem to={"/Register"}>Item 3 </DropdownItem>
      </Dropdown>
      <Button onClick={showToastHandler} block className="mt-1">
        show toast
      </Button>
      <Button
        onClick={showAlertHandler}
        block
        className="mt-1"
        color="secondary"
      >
        show alert
      </Button>

      <Button onClick={showDialogHandler} block className="mt-1" color="green">
        show dialog
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
