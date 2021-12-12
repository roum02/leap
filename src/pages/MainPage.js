import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Title from "../components/Title";

import main from "../assets/main.jpg";
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

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin-bottom: 30px;
`;

const MainPage = () => {
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

  // const [projects, setProjects] = useState([
  //   {
  //     src: { upcycling },
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
              <img src={upcycling} alt="upcycling" style={{ width: "100%" }} />
            </Col>
            <Col style={{ marginRight: "160px", marginLeft: "100px" }}>
              <img
                src={upcyclathon}
                style={{
                  width: "120%",
                }}
                alt="upcyclathon"
              />
            </Col>
            <Col>
              <img
                src={exhibition}
                alt="exhibition"
                style={{ width: "110%" }}
              />
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
