import styled from "styled-components";

interface ResumeCartProps {
  collapsed: boolean;
}

export const Nav = styled.nav`
  font-size: 18px;
  position: fixed;
  top: 0;
  z-index: 999;
  height: 7vh;
  width: 100vw;
  background-color: #0065aa;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  color: #ececec;
  display: flex;
  align-items: center;
  padding: 1rem;
  max-width: 100vw;
`;

export const IconHome = styled.a`
  color #FFFF;
  cursor: pointer;
  displex: flex;
  align-items: left;
  text-decoration: none;
  font-size: 2rem;
`;

export const SeachInput = styled.input`
  margin: 0 32vw 0 32vw;
  border-radius: 5px;
  width: 40vw;
  height: 27px;
  :&fused  {
    border-color: transparent;
  }
`;

export const ButtonCart = styled.a`
  cursor: pointer;
  displex: flex;
  font-size: 2rem;

  &:hover {
    color: #c6c0a7;
  }
`;

export const QuantityCart = styled.div`
  border-radius: 100px;
  background-color: red;
  width: 2vw;
  align-items: center;
  position: relative;
  right: 7px;
  bottom: 13px;
  display: flex;
  justify-content: center;
`;

export const UserIcon = styled.a`
  font-size: 2rem;
  &:hover {
    color: #c6c0a7;
  }
`;

export const ResumeCart = styled.div<ResumeCartProps>`
  max-height: ${(props) => (props.collapsed ? "100%" : "0")};
  overflow: hidden;
  padding: ${(props) => (props.collapsed ? "25px 0" : "0")};
  transition: all 0.3s ease-out;
`;
