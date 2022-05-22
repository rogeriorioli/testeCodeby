import { useContext, useEffect, useState } from "react";
import { cardContext } from "../../context/cartContext";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import { CarItem, CartContainer, CartFooter } from "./style";
import Toast from "../../components/Toast";

const Cart = () => {
  const [amount, setAmount] = useState(0);

  const { item } = useContext(cardContext);

  useEffect(() => {
    if (item.length > 0) {
      const totalCart = item
        .map((item) => item.price)
        .reduce((prev, next) => prev + next);
      setAmount(totalCart);
    }
  }, [item]);

  return (
    <>
      <CartContainer>
        {item.map((item) => (
          <CarItem key={item.uniqueId}>
            <div className="image-container">
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={150}
              />
            </div>
            <div>
              <h2>{item.name}</h2>
              <span>
                R$
                <CurrencyFormat
                  value={item.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"R$"}
                  format="#,##"
                />
              </span>
            </div>
          </CarItem>
        ))}
        {amount < 999 ? "" : <Toast message="Que legal tu tens frete grátis" />}
        <CartFooter>
          <span>
            Total: R$
            {amount < 999 ? (
              <CurrencyFormat
                value={amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R$"}
                format={"#,##"}
              />
            ) : (
              <CurrencyFormat
                value={amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"R$"}
                format={"##,##"}
              />
            )}
          </span>
        </CartFooter>
      </CartContainer>
    </>
  );
};

export default Cart;
