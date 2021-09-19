import React, { Component, useState } from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Image from "../components/Image";
import Title from "../components/Title";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";

import eternal from "../assets/eternal.png";
import again from "../assets/again.png";
import useful from "../assets/useful.png";
import insta from "../assets/insta.png";
import home from "../assets/home.png";
import email from "../assets/email.png";
import location from "../assets/location.png";

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

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const About = () => {
  return (
    <Wrapper>
      <Header page="2" />
      <Title size="48" weight="700" marginBottom="100" marginTop="200">
        지구와 우리 사이를 UP시키다
      </Title>
      <Title size="32" weight="400" marginBottom="100">
        업사이클링을 통해 지구와 우리가 함께하는 세상을 만듭니다.
      </Title>
      <img
        alt="로고"
        src={logo}
        style={{
          width: "25rem",
          objectFit: "cover",
        }}
      />
      <Title size="32" weight="700" marginTop="200" marginBottom="100">
        우리는 이런 가치들을 위해
      </Title>
      <Row style={{ justifyContent: "space-around" }}>
        <Col>
          <img alt="끊임없는" src={eternal} style={{ width: "120%" }} />
          <Title
            size="30"
            weight="700"
            marginBottom="24"
            style={{ textShadow: "0px 4px 4px grey" }}
          >
            ETERNAL
          </Title>
          <Title size="28" weight="700">
            끊임없는
          </Title>
        </Col>

        <Col style={{ marginRight: "50px", marginLeft: "50px" }}>
          <img alt="다시" src={again} style={{ width: "120%" }} />
          <Title
            size="30"
            weight="700"
            marginBottom="24"
            style={{ textShadow: "0px 4px 4px grey" }}
          >
            AGAIN
          </Title>
          <Title size="28" weight="700">
            다시
          </Title>
        </Col>
        <Col>
          <img alt="유용한" src={useful} style={{ width: "120%" }} />
          <Title
            size="30"
            weight="700"
            marginBottom="24"
            style={{ textShadow: "0px 4px 4px grey" }}
          >
            USEFUL
          </Title>
          <Title size="28" weight="700">
            유용한
          </Title>
        </Col>
      </Row>
      <Row style={{ marginTop: "450px", marginBottom: "150px" }}>
        <Col
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Title size="48" width="400">
            CONTACT US BY
          </Title>
        </Col>
        <Col
          style={{
            marginLeft: "30%",
          }}
        >
          <Row
            style={{
              width: "15rem",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginBottom: "4rem",
            }}
          >
            <img alt="인스타" src={insta} />
            <Col style={{ paddingTop: "6px" }}>
              <Title marginLeft="30">@earth__.us</Title>
            </Col>
          </Row>
          <Link href="https://roum02.github.io/reap/#/">
            <Row
              style={{
                width: "15rem",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                marginBottom: "4rem",
              }}
            >
              <img alt="홈" src={home} />
              <Col style={{ paddingTop: "6px" }}>
                <Title marginLeft="30">https://roum02.github.io/reap/#/</Title>
              </Col>
            </Row>
          </Link>
          <Row
            style={{
              width: "15rem",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginBottom: "4rem",
            }}
          >
            <img alt="이메일" src={email} />
            <Col style={{ paddingTop: "6px" }}>
              <Title marginLeft="30">이메일 주소</Title>
            </Col>
          </Row>
          <Row
            style={{
              width: "15rem",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <img alt="위치" src={location} />
            <Col style={{ paddingTop: "6px" }}>
              <Title marginLeft="30">주소</Title>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Wrapper>
  );
};

export default About;
