import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { HeaderContainer } from "./style";
import { cardContext } from "../../context/cartContext";
import Link from "next/link";

const Header = () => {
  const cart = useContext(cardContext);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart.item));
  }, [cart.item]);

  return (
    <HeaderContainer items={cart.item.length.toString()}>
      <div className="logo">
        <Link href="/">
          <a>
            <Image
              src="/images/logo.svg"
              width={115.28}
              height={60}
              alt="logo"
            />
          </a>
        </Link>
      </div>
      <div className="cart">
        <Link href="/cart">
          <Image src="/images/cart.png" alt="" height={38} width={38} />
        </Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
