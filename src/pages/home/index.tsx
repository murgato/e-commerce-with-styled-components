import React, { useEffect, useState } from "react";
import { ProductResume } from "../../components/ProductResume";
import { HomeControllers } from "../../controllers";
import { FaIcons } from "../../util/icons";
import CarouselComponent from "./components/Carousel/Carousel";

import {
  BarFilter,
  Body,
  ButtonContainer,
  ButtonStyleViewLeft,
  ButtonStyleViewRight,
  Container,
  ContainerProduct,
} from "./styles/Home.Styles";

const Home = (): JSX.Element => {
  const [active, setActive] = useState({
    list: true,
    grade: false,
  });
  const [isList, SetIsList] = useState(true);
  const [products, setProducts] = useState([]);
  const [carousel, setCarousel] = useState([]);

  const getAllProducts = async () => {
    let products = await HomeControllers.getAllProducts();
    setProducts(products);
  };

  const getCarousel = async () => {
    let products = await HomeControllers.getCaurosel();
    setCarousel(products);
  };
  useEffect(() => {
    getAllProducts();
    getCarousel();
  }, []);

  const onClickActive = () => {
    setActive({
      list: !active.list,
      grade: !active.grade,
    });
  };
  const onClickList = () => {
    SetIsList(!isList);
  };

  return (
    <Body>
      <Container>
        <CarouselComponent products={carousel} />
      </Container>
      <BarFilter>
        <ButtonContainer>
          <ButtonStyleViewLeft
            active={active.list}
            onClick={() => {
              onClickActive();
              onClickList();
            }}
          >
            <FaIcons.FaThList />
          </ButtonStyleViewLeft>
          <ButtonStyleViewRight
            active={active.grade}
            onClick={() => {
              onClickActive();
              onClickList();
            }}
          >
            <FaIcons.FaTh />
          </ButtonStyleViewRight>
        </ButtonContainer>
      </BarFilter>

      <ContainerProduct isList={isList}>
        {products &&
          products.map((product) => {
            return <ProductResume isList={isList} product={product} />;
          })}
      </ContainerProduct>
    </Body>
  );
};
export default Home;
