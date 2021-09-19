import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Title from "../components/Title";
import Carousel from "../components/Carousel";

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
  align-items: center;
  flex-direction: row;
  width: 100%;
  flex-direction: row;
  transition: 0.1s;
  margin: 30px;
  margin-bottom: 100px;
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
  align-items: center;
  width: 15rem;
  margin-bottom: 30px;
`;

const MainPage = () => {
  const history = useHistory();

  // const projects = [
  //   {
  //     src: "../assets/rectangle.png",
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
  // ];

  const [projects, setProjects] = useState([
    {
      src: { upcycling },
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
  ]);

  return (
    <Wrapper>
      <Background>
        <Header page="0" />
        {/* <Carousel /> */}
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

        {/* <div style={{ overflowX: "hidden" }}> */}
        <div>
          <Slider>
            <Col>
              <img src={upcycling} style={{ width: "100%" }} />
              <Title size="36" weight="700" marginTop="30">
                UPCYCLING
              </Title>
              <Title size="36" weight="700" marginTop="20">
                CAMPAIGN
              </Title>
            </Col>

            <Col style={{ marginRight: "140px", marginLeft: "100px" }}>
              <img
                src={upcyclathon}
                style={{
                  width: "120%",
                }}
              />
              <Title size="36" weight="700" marginTop="30">
                UPCYCLATHON
              </Title>
            </Col>
            <Col>
              <img src={exhibition} style={{ width: "110%" }} />
              <Title size="36" weight="700" marginTop="30">
                UPCYCLING
              </Title>
              <Title size="36" weight="700" marginTop="20">
                EXHIBITION
              </Title>
            </Col>
            {/* {projects.map((project, i) => {
              return (
                <ProjectBox key={i}>
                  <Image
                    alt={project.name}
                    src={require("../assets/rectangle.png").default}
                    width="430"
                    height="330"
                    marginTop="20"
                  />
                </ProjectBox>
              );
            })} */}
          </Slider>
        </div>
        {/* 
        <Row style={{ justifyContent: "space-around" }}>
          <Col>
            <img alt="끊임없는" src={upcycling} style={{ width: "120%" }} />
          </Col>

          <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
            <img alt="다시" src={upcyclathon} style={{ width: "120%" }} />
          </Col>
          <Col>
            <img alt="유용한" src={exhibition} style={{ width: "120%" }} />
          </Col>
        </Row> */}
        <Footer />
      </Background>
    </Wrapper>
  );
};

export default MainPage;
