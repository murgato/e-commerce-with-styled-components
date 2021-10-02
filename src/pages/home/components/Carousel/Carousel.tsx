import React, { useRef } from "react";
import { IoIoIcons } from "../../../../util/icons";
import { maskMoney } from "../../../../util/mask";
import {
  AlertNew,
  AlertNewText,
  ButtomArrowLeft,
  ButtomArrowRight,
  Carousel,
  Image,
  ImageContent,
  Info,
  Item,
  Name,
  OldPrice,
  Price,
  WanningIcon,
} from "../styles/Carousel.Styles";

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
  products: Product[];
}

const CarouselComponent = ({ products }: Props) => {
  const carousel = useRef(null);
  const handleLeftClick = (e: any) => {
    //@ts-ignore
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handleRightClick = (e: any) => {
    //@ts-ignore
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  return (
    <Carousel ref={carousel}>
      <ButtomArrowLeft onClick={handleRightClick}>
        <IoIoIcons.IoIosArrowBack />
      </ButtomArrowLeft>
      {products.length !== 0 &&
        products.map((product) => {
          return (
            <Item>
              <Image>
                <ImageContent src={product.iamge} />
              </Image>
              <Info>
                <Name>{product.name}</Name>
                {product.isSale && (
                  <OldPrice>R$ {maskMoney(product.oldPrice)}</OldPrice>
                )}
                {product.isNew && (
                  <AlertNew>
                    <WanningIcon />
                    <AlertNewText> Novidade </AlertNewText>
                  </AlertNew>
                )}

                <Price>R$ {maskMoney(product.price)}</Price>
              </Info>
            </Item>
          );
        })}
      <ButtomArrowRight>
        <IoIoIcons.IoIosArrowForward onClick={handleLeftClick} />
      </ButtomArrowRight>
    </Carousel>
  );
};

export default CarouselComponent;
