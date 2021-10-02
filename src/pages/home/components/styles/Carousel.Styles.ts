import styled from "styled-components";
import { TiIcons } from "../../../../util/icons";

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  align-items: center;
  max-width: 122vh;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  margin: 10px;
  padding: 10px;
  width: 280px;
  flex: none;
`;
export const Image = styled.div``;
export const ImageContent = styled.img`
  width: 100%;
  heigth: 100%;
  object-: cover;
`;

export const ButtomArrow = styled.div`
  color: black;
  font-size: 40px;
  align-items: center;
  opacity: 0.2;
  position: absolute;
  cursor: pointer;
  justify-content: space-between;
  :hover {
    opacity: 1;
  }
`;

export const ButtomArrowLeft = styled(ButtomArrow)``;
export const ButtomArrowRight = styled(ButtomArrow)`
  left: 160vh;
`;

export const Info = styled.div`
  heigth: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Span = styled.span`
  display: block;
  text-align: center;
  color: #e1e1e1e;
  padding: 5px;
  border-radius: 100px;
`;

export const Name = styled(Span)`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
`;

export const OldPrice = styled(Span)`
  font-size: 0.8rem;
  text-decoration: line-through;
  flex-grow: 1;
  color: red;
`;

export const Price = styled(Span)`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  background-color: #0065aa;
  color: #ececec;
`;
export const AlertNew = styled.div`
  background-color: #ff9b76;
  font-size: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  box-shadow: 7px 9px 23px 0px rgba(255, 155, 118, 0.62);
  border: 2px solid #ff9b76;
  border-radius: 9px;
  color: #6b5851;
`;

export const WanningIcon = styled(TiIcons.TiWarningOutline)`
  font-size: 32px;
`;

export const AlertNewText = styled.span`
  font-weight: bold;
`;