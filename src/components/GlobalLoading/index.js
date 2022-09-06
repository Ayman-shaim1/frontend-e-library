import React from "react";
import {
  GlobalLoadingOverlay,
  GlobalLoadingImg,
} from "./GlobalLoading.Elements";
import { useSelector } from "react-redux";
const GlobalLoading = () => {
  const globalLoading = useSelector((state) => state.globalLoading);
  const { show } = globalLoading;

  return (
    <>
      <GlobalLoadingOverlay show={show} />
      <GlobalLoadingImg alt="loading" src="/images/spinner.gif" show={show} />
    </>
  );
};

export default GlobalLoading;
