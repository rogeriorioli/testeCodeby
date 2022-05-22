import React, { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}
const Button = ({ text, ...props }: ButtonProps) => {
  return <ButtonContainer {...props}>{text}</ButtonContainer>;
};

export default Button;
