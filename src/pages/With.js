import React, { useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Title from "../components/Title";
import Input from "../components/Input";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Slider = styled.div`
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: row;
  transition: 0.1s;
  margin: 30px;
  margin-top: 150px;
`;

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  margin-bottom: 40px;
`;

const Inputbox = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: row;

  ul {
    width: 140px;
    display: none;
    padding-left: 0px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    margin-top: 65px;
    overflow-y: scroll;
    height: 100px;
  }
  li {
    padding: 5px 10px;
    list-style: none;
    display: none;
    border-radius: 10px;
    :hover {
      border: 1px solid #c4c4c4;
    }
  }
  :hover {
    ul,
    li {
      display: block;
      cursor: pointer;
      background-color: white;
      z-index: 1;
    }
  }
`;

const With = () => {
  const [order] = useState({
    time: "최신순",
  });
  const [projects] = useState([
    {
      src: "../assets/rectangle.png",
      name: "프로젝트 제목1",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트 제목2",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트 제목3",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트 제목4",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트 제목5",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트 제목6",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트 제목7",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트 제목8",
    },
  ]);

  return (
    <Wrapper>
      <Header page="4" />
      {/*dropdown */}
      <Row
        style={{
          alignItems: "center",
          marginTop: "18px",
          marginBottom: "18px",
        }}
      >
        <Inputbox>
          <Item>
            <Input width="141" height="65">
              <Title size="18" weight="700">
                {order.time}
              </Title>
              <img
                alt="dropdown"
                src={require("../assets/dropdown.png").default}
                style={{ marginLeft: "21px" }}
              />
            </Input>
            <ul>
              <li>
                <Title size="20" weight="400">
                  순서1
                </Title>
              </li>
              <li>
                <Title size="20" weight="400">
                  순서2
                </Title>
              </li>
              <li>
                <Title size="20" weight="400">
                  순서3
                </Title>
              </li>
              <li>
                <Title size="20" weight="400">
                  순서4
                </Title>
              </li>
            </ul>
          </Item>
          <div style={{ margin: "15px" }}>
            {/* <img
              alt="line"
              src={require("../assets/line.png").default}
              style={{ width: "57px", height: "3px" }}
            /> */}
          </div>
        </Inputbox>
      </Row>
      <div style={{ overflowX: "hidden" }}>
        <Slider>
          {projects.map((project, i) => {
            return (
              <ProjectBox key={i}>
                <Image
                  alt="프로젝트 이미지"
                  src={require("../assets/rectangle.png").default}
                  width="350"
                  height="350"
                />
                <Title size="20">{project.name}</Title>
              </ProjectBox>
            );
          })}
        </Slider>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default With;
