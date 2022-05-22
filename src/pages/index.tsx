import { useState, useEffect, useCallback, useContext } from "react";
import Button from "../components/Button";
import Card, { CardPros } from "../components/Card";
import { cardContext } from "../context/cartContext";

export default function Home() {
  const [data, setData] = useState<CardPros[]>([]);
  const [isLoading, setLoading] = useState(false);
  const cart = useContext(cardContext);

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
  console.log(cart?.item);
  return data.map((items) => {
    return (
      <Card
        key={items.uniqueId}
        name={items.name}
        imageUrl={items.imageUrl}
        price={items.price}
        listPrice={items.listPrice}
      >
        <Button
          text={"Comprar"}
          onClick={() => cart.setCart((item: any) => [...item, items])}
        />
      </Card>
    );
  });
}
