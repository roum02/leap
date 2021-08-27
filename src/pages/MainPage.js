import React, { Component, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Header from "../components/Header";
import Image from "../components/Image";
import Footer from "../components/Footer";
import Title from "../components/Title";

import main from "../assets/main.jpg";
import logo from "../assets/logo.png";
import footer from "../assets/footer.png";
import rectangle from "../assets/rectangle.png";
import upcycling from "../assets/upcycling.png";
import upcyclathon from "../assets/upcyclathon.png";
import exhibition from "../assets/exhibition.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64rem;
  background-image: url(${main});
  background-size: cover;
`;

const Slider = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex-direction: row;
  transition: 0.1s;
  margin: 30px;
  margin-bottom: 90px;
`;

const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-right: 50px;
`;

const MainPage = () => {
  const history = useHistory();

  const projects = [
    {
      src: "../assets/rectangle.png",
      name: "프로젝트1",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트2",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트3",
    },
    {
      src: "../assets/rectangle.png",
      name: "프로젝트4",
    },
  ];

  // const [projects, setProjects] = useState([
  //   {
  //     src: "../assets/upcycling.png",
  //     name: "프로젝트1",
  //   },
  //   {
  //     src: "../assets/rectangle.png",
  //     name: "프로젝트2",
  //   },
  //   {
  //     src: "../assets/rectangle.png",
  //     name: "프로젝트3",
  //   },
  //   {
  //     src: "../assets/rectangle.png",
  //     name: "프로젝트4",
  //   },
  // ]);

  return (
    <Wrapper>
      <Background>
        <Header />
        <div style={{ marginTop: "75rem" }} />
        <div style={{ marginLeft: "8rem", marginBottom: "200px" }}>
          <Title size="36" weight="700">
            다시 만드는 가치,
          </Title>
          <br />
          <Title size="24" weight="700" marginTop="20" marginLeft="2">
            어스앤어스는 고민합니다.
          </Title>
        </div>

        {/* <Row>
          <Col>
            <img
              src={upcycling}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col>
            <img
              src={upcyclathon}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col>
            <img
              src={exhibition}
              style={{
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row> */}

        <div style={{ overflowX: "hidden" }}>
          <Slider>
            {projects.map((project, i) => {
              return (
                <ProjectBox key={i}>
                  <Image
                    alt="프로젝트 이미지"
                    src={require("../assets/rectangle.png").default}
                    width="430"
                    height="330"
                    marginTop="20"
                  />
                </ProjectBox>
              );
            })}
          </Slider>
        </div>

        {/* <Image
          alt="프로젝트 이미지"
          src={require("../assets/rectangle.png").default}
          width="430"
          height="330"
        /> */}
        {/* <img alt="푸터" src={footer} style={{}} /> */}
        <Footer />
      </Background>
    </Wrapper>
  );
};

export default MainPage;
