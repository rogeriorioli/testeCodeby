import React from "react";

import { ToastContainer } from "./style";

const Toast = ({ message }) => {
  return <ToastContainer>{message}</ToastContainer>;
};

export default Toast;
