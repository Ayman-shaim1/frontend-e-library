import React from "react";
import { Button, Loader, Center } from "../components";
import { GlobalLoading } from "../utils/";
const ProfilePage = () => {
  return (
    <>
      <Center>
        <Loader />
      </Center>
      <Button
        className="my-1"
        block
        onClick={() => {
          GlobalLoading.show();
          setTimeout(GlobalLoading.hide, 5000);
        }}
      >
        show loading
      </Button>
    </>
  );
};

export default ProfilePage;
