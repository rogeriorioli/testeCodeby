import { HTMLAttributes } from "react";
import { AddProductsToCartContainer } from "./style";

interface ProducAddToCartProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
}

const ProcuctAddToCart = ({ message, ...props }: ProducAddToCartProps) => {
  return (
    <AddProductsToCartContainer {...props}>
      {message}
    </AddProductsToCartContainer>
  );
};

export default ProcuctAddToCart;
