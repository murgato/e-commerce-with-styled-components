import React, { useState } from "react";
import { maskMoney } from "../../util/mask";
import {
  AlertNew,
  AlertNewText,
  ButtonBuy,
  Container,
  ContainerPrice,
  ContainerTitle,
  IconBuy,
  Image,
  OldPrice,
  Price,
  Title,
  WanningIcon,
} from "./ProductResume.Styles";
interface Product {
  name: string;
  price: string | number;
  favorite: boolean;
  iamge: string;
  isSale: boolean;
  oldPrice: string | number;
  isNew: boolean;
}

interface Props {
  isList: boolean;
  product: Product;
}

export const ProductResume = ({ isList, product }: Props) => {
  const [showButtonBuy, setShowButtonBuy] = useState(false);
  return (
    <Container
      isList={isList}
      onMouseOver={() => setShowButtonBuy(!showButtonBuy)}
      onMouseOut={() => setShowButtonBuy(!showButtonBuy)}
    >
      <Image isList={isList} src={product.iamge} />
      <ContainerTitle isList={isList}>
        <Title isList={isList}>{product.name}</Title>
      </ContainerTitle>
      <ContainerPrice
        onMouseOver={() => setShowButtonBuy(true)}
        isList={isList}
      >
        {product.isSale && (
          <OldPrice isList={isList}>R$ {maskMoney(product.oldPrice)}</OldPrice>
        )}
        {product.isNew && (
          <AlertNew isList={isList}>
            <WanningIcon />
            <AlertNewText> Novidade </AlertNewText>
          </AlertNew>
        )}

        <Price isList={isList}>R$ {maskMoney(product.price)}</Price>
        {showButtonBuy && (
          <ButtonBuy onMouseOver={() => setShowButtonBuy(true)} isList={isList}>
            <IconBuy />
            Comprar Agora
          </ButtonBuy>
        )}
      </ContainerPrice>
    </Container>
  );
};
