import { useState, useEffect, useCallback, useContext } from "react";
import Button from "../components/Button";
import Card, { CardPros } from "../components/Card";
import ProcuctAddToCart from "../components/ProcuctAddToCart";
import { cardContext } from "../context/cartContext";

export default function Home() {
  const [data, setData] = useState<CardPros[]>([]);
  const [isLoading, setLoading] = useState(false);
  const cart = useContext(cardContext);

  const [prodAdd, setProdAdd] = useState<Boolean>(false);

  const addProdToCart = (items: CardPros) => {
    cart.setCart((item: any) => [...item, items]);
    setProdAdd(true);
    setTimeout(() => {
      setProdAdd(false);
    }, 3000);
  };

  useEffect(() => {
    setLoading(true);
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => {
        const { items } = data;
        setData(items);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Sem produtos</p>;
  return (
    <>
      {data.map((items) => {
        return (
          <Card
            key={items.uniqueId}
            name={items.name}
            imageUrl={items.imageUrl}
            price={items.price}
            listPrice={items.listPrice}
          >
            <>
              <Button text={"Comprar"} onClick={() => addProdToCart(items)} />
            </>
          </Card>
        );
      })}
      {prodAdd && (
        <ProcuctAddToCart
          className={prodAdd && "isVisible"}
          message="Produto addicionado no carrinho"
        />
      )}
    </>
  );
}
