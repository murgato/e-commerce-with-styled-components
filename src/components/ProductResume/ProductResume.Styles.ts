import styled from "styled-components";
import { AiIcons, TiIcons } from "../../util/icons";
interface Props {
  isList: boolean;
}

export const Container = styled.div<Props>`
  ${(props) =>
    props.isList
      ? `
  height: 28vh;
  width: 87vw; `
      : `
  height: auto;
  width: 18vw; 
  display: flex;
  align-items: center;
  flex-direction: column;
      `}
  display: flex;
  align-items: center;
  padding: 10px;
  &:hover {
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  }
`;

export const Image = styled.img<Props>`
  ${(props) =>
    props.isList
      ? `
  height: 250px;
  `
      : ` 
  height: 177px;
      `}
`;

export const ContainerTitle = styled.div<Props>`
  ${(props) =>
    props.isList
      ? `  display: flex;
  align-items: center;
  height: 13vw;
  width: 55vw;
  padding: 50px;`
      : `
      align-items: center;
      text-align: center;
      `}
`;

export const Title = styled.span<Props>`
  font-weight: bold;
  ${(props) =>
    props.isList
      ? `  
      display: flex;
      font-size: 30px;`
      : `
      font-size: 21px;`}
`;

export const ContainerPrice = styled.div<Props>`
  ${(props) =>
    props.isList &&
    `  border-left: 2px solid #1c6ea4;
  height: 13vw;
  width: 25vw;
  padding: 22px;
  align-items: center;`}
`;

export const OldPrice = styled.div<Props>`
  ${(props) =>
    props.isList
      ? ` 
  font-size: 20px;
`
      : `font-size: 15 px;
      `}
  text-decoration: line-through;
  color: red;
`;

export const Price = styled.span<Props>`
  ${(props) =>
    props.isList
      ? ` 
      font-size: 30px;
`
      : ` font-size: 23px;`}
  font-weight: bold;

  position: relative;
`;

export const ButtonBuy = styled.button<Props>`
  ${(props) =>
    props.isList
      ? `  
    margin-top: 50px;
    border-radius: 10px;
    width: 20vw;
    height: 4vh;
    font-size: 25px;
    cursor: pointer;`
      : `
      border-radius: 10px;
      width: 15vw;
      height: 4vh;
      font-size: 25px;
      `}
  cursor:pointer;
  padding: 10px;
  align-items: center;
  align-content: center;
  display: flex;
  color: #ececec;
  font-weight: bolder;
  background-color: #0065aa;
`;
export const IconBuy = styled(AiIcons.AiOutlineShoppingCart)`
  font-size: 37px;
  margin-right: 10px;
`;

export const AlertNew = styled.div<Props>`
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
  ${(props) => !props.isList && `width: 15vw`}
`;

export const WanningIcon = styled(TiIcons.TiWarningOutline)`
  font-size: 32px;
`;

export const AlertNewText = styled.span`
  font-weight: bold;
`;
