import styled from "styled-components";

export const Body = styled.div``;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 7vh;
`;
interface PropsContainerProduct {
  isList: boolean;
}

export const ContainerProduct = styled.div<PropsContainerProduct>`
  padding: 2%;
  justify-content: center;
  padding: 10px;
  align-items: center;
  ${(props) =>
    props.isList
      ? `
  flex-direction: column;`
      : `display:grid; 
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      justify-items: center;
    align-content: center;
      `}
`;

export const BarFilter = styled.div`
  background-color: #f1f8fb;
  height: 7vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 105rem;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  width: auto;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
interface PropsButton {
  active?: boolean;
}
export const ButtonStyleView = styled.button<PropsButton>`
  text-align: center;
  justify-content: center;
  width: 3vw;
  height: 4vh;
  font-size: 23px;
  background-color: transparent;
  cursor: pointer;
  ${(props) =>
    props.active
      ? "border: 2px solid #000;color:#000;"
      : "  border: 2px solid #c6cccf;color: #c6cccf"}
`;

export const ButtonStyleViewLeft = styled(ButtonStyleView)`
  border-radius: 8px 0px 0px 8px;
`;
export const ButtonStyleViewRight = styled(ButtonStyleView)`
  border-left: none;
  border-radius: 0px 8px 8px 0px;
  ${(props) =>
    props.active
      ? "border-left: 2px solid #000;color:#000;"
      : "  border: 2px solid #c6cccf;color: #c6cccf"}
`;
