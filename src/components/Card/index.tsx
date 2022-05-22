import {
  CardContainer,
  ImageProductContainer,
  ProductButtonContainer,
  ProductTitleContainer,
} from "./style";
import Image from "next/image";
import CurrencyFormat from "react-currency-format";
export interface CardPros {
  uniqueId?: string;
  imageUrl: string;
  name: string;
  price: string;
  listPrice?: string;
  children?: React.ReactElement;
}
const Card = ({ imageUrl, name, price, listPrice, children }: CardPros) => {
  return (
    <CardContainer>
      <ImageProductContainer>
        <Image
          alt={name}
          src={imageUrl}
          layout="responsive"
          blurDataURL={imageUrl}
          loading="lazy"
          width={300}
          height={350}
        />
      </ImageProductContainer>
      <ProductTitleContainer>
        <h2>{name}</h2>
      </ProductTitleContainer>
      <div className="price-container">
        R$
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"R$"}
          format="#,##"
        />
        {listPrice == price ? (
          ""
        ) : (
          <>
            R$
            <CurrencyFormat
              value={price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"R$"}
              format="#,##"
            />
          </>
        )}
      </div>
      <ProductButtonContainer>{children}</ProductButtonContainer>
    </CardContainer>
  );
};

export default Card;
