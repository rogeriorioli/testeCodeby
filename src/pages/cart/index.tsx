import { useCallback, useContext, useEffect, useState } from "react";
import { cardContext } from "../../context/cartContext";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
import CartContainer from "./CardContainer";
import Toast from "../../components/Toast";
import CarItem from "./CarITem";
import CartFooter from "./CartFooter";
import Link from "next/link";

const Cart = () => {
  const [amount, setAmount] = useState<number>(0);
  const [freeShip, setFreeShip] = useState<number>(0);
  const { item } = useContext(cardContext);

  useEffect(() => {
    if (item.length > 0) {
      const totalCart = item
        .map((item) => item.price)
        .reduce((prev, next) => prev + next);
      setAmount(totalCart);
      setFreeShip(1000 - totalCart);
    }
  }, [item]);

  return (
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
      {amount < 999 ? (
        <Toast>
          <>
            Falta R$ &nbsp;
            <CurrencyFormat
              value={freeShip}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"R$"}
              format={"#,##"}
            />{" "}
            &nbsp; para ter frete grátis! &nbsp;
            <br />
            <Link href="/">
              <a>adicionar mais item</a>
            </Link>
          </>
        </Toast>
      ) : (
        <Toast>
          <>Que legal tu tens frete grátis</>
        </Toast>
      )}
      <CartFooter>
        <>
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
        </>
      </CartFooter>
    </CartContainer>
  );
};

export default Cart;
