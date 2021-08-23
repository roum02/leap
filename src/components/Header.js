import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;

  .menu {
    display: flex;
    flex-direction: row;
  }
`;

const Menu = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 60px;
  margin-right: 80px;
  font-size: 20px;
  font-weight: 500;

  :hover {
    border-bottom: 5px solid;
    border-color: var(--middle);
    color: var(--deep);
    cursor: pointer;
  }
`;

// const Active = styled.div`
//   width: 173px;
//   height: 95px;
//   text-align: center;
//   padding: 30px;
//   font-size: 24px;
//   border-bottom: 5px solid;
//   border-color: var(--middle);
//   color: var(--deep);
// `;

function Header({ page }) {
  const history = useHistory();
  //화면이동
  const Main = () => {
    history.push("/");
  };

  return (
    <Wrapper>
      <img
        alt="로고"
        src={logo}
        style={{
          width: "120px",
          margin: "60px",
          zIndex: "999",
          position: "absolute",
          top: "0px",
          left: "8px",
        }}
        onClick={() => history.push("/")}
      />
      <Menu onClick={() => history.push("/mystory")}>MYSTORY</Menu>
      <Menu onClick={() => history.push("/about")}>ABOUT</Menu>
      <Menu onClick={() => history.push("/work")}>WORK</Menu>
      <Menu onClick={() => history.push("/with")}>WITH</Menu>
    </Wrapper>
  );
}

export default Header;
