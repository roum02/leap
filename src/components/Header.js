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

  //fix
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* background-color: white; */
  /* padding-bottom: 2rem; */

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

const Active = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 60px;
  margin-right: 80px;
  font-size: 20px;
  font-weight: 500;
  border-bottom: 5px solid;
  border-color: var(--middle);
  color: var(--deep);
  cursor: pointer;
`;

function Header({ page }) {
  const history = useHistory();
  //화면이동
  const Main = () => {
    history.push("/");
  };
  const MyStory = () => {
    history.push("/mystory");
  };
  const About = () => {
    history.push("/about");
  };
  const Work = () => {
    history.push("/work");
  };
  const With = () => {
    history.push("/with");
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
        onClick={Main}
      />

      {page === "0" ? (
        <div class="menu">
          <Menu onClick={MyStory}>
            ABOUT
            <br />
            US
          </Menu>
          <Menu onClick={About}>
            ABOUT
            <br />
            EARTH
          </Menu>
          {/* <Menu onClick={Work}>WORK</Menu>
          <Menu onClick={With}>WITH</Menu> */}
        </div>
      ) : null}

      {page === "1" ? (
        <div class="menu">
          <Active>
            ABOUT
            <br /> US
          </Active>
          <Menu onClick={About}>
            ABOUT
            <br />
            EARTH
          </Menu>
          {/* <Menu onClick={Work}>WORK</Menu>
          <Menu onClick={With}>WITH</Menu> */}
        </div>
      ) : null}

      {page === "2" ? (
        <div class="menu">
          <Menu onClick={MyStory}>
            ABOUT
            <br />
            US
          </Menu>
          <Active>
            ABOUT
            <br />
            EARTH
          </Active>
          {/* <Menu onClick={Work}>WORK</Menu>
          <Menu onClick={With}>WITH</Menu> */}
        </div>
      ) : null}

      {page === "3" ? (
        <div class="menu">
          <Menu onClick={MyStory}>
            ABOUT
            <br />
            US
          </Menu>
          <Menu onClick={About}>
            ABOUT
            <br />
            EARTH
          </Menu>
          {/* <Active>WORK</Active> */}
          {/* <Menu onClick={With}>WITH</Menu> */}
        </div>
      ) : null}

      {page === "4" ? (
        <div class="menu">
          <Menu onClick={MyStory}>
            ABOUT
            <br />
            US
          </Menu>
          <Menu onClick={About}>
            ABOUT
            <br />
            EARTH
          </Menu>
          {/* <Menu onClick={Work}>WORK</Menu>
          <Active>WITH</Active> */}
        </div>
      ) : null}
    </Wrapper>
  );
}

export default Header;
