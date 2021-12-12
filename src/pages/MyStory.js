import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Title from "../components/Title";
import Footer from "../components/Footer";

import trash from "../assets/trash.jpg";
import bottle from "../assets/bottle.jpg";
import you1 from "../assets/you1.png";
import you2 from "../assets/you2.png";
import you3 from "../assets/you3.png";

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

const MyStory = () => {
  return (
    <div>
      <Header page="1" />
      <div style={{ marginLeft: "90px", marginBottom: "80px" }}>
        <Title size="48" weight="700" marginTop="130">
          업사이클링,
          <br />
          <br />
          <br />왜 필요한데?
        </Title>

        <div style={{ marginTop: "60px", fontSize: "24px" }}>
          <div>
            업사이클링은 <b>재탄생</b>이야.
          </div>
          <div>우리 주변에는 평범한 쓰레기로 보이지만</div>
          <div>시각을 뒤집으면 재탄생될 수 있는 것들이 많아!</div>
        </div>
      </div>

      <Wrapper>
        {/* <Image
          alt="쓰레기 이미지"
          src={require("../assets/trash.jpg").default}
        /> */}
        <img
          alt="쓰레기 이미지"
          src={trash}
          style={{
            width: "100%",
            height: "35rem",
            objectFit: "cover",
            marginBottom: "300px",
          }}
        />
        <img
          alt="병 이미지"
          src={bottle}
          style={{ width: "100%", height: "40rem", objectFit: "cover" }}
        />
        <Title size="48" weight="700" marginTop="130">
          우리에게 필요한 건
        </Title>
        <Title size="48" weight="700" marginBottom="300">
          <br />
          <br />
          <br />
          세상을 <span style={{ color: "#1D76FF" }}>새</span>
          <span style={{ color: "#00C032" }}>롭</span>
          <span style={{ color: "#FFA800" }}>게</span> 볼 수 있는 시각이 아닐까?
        </Title>
        <Row
          style={{
            width: "80%",
            // marginLeft: "20%",
            // marginRight: "20%",
            marginBottom: "200px",
            padding: "40px",
            borderBottom: "1px solid #C4C4C4",
          }}
        >
          <Title size="24" weight="700" style={{ marginRight: "20%" }}>
            이런 너도,
          </Title>
          <Title size="24" weight="700" style={{ marginRight: "20%" }}>
            그런 너도,
          </Title>
          <Title size="24" weight="700" style={{}}>
            저런 너도,
          </Title>
        </Row>
        <Row
          style={{
            marginBottom: "200px",
          }}
        >
          <img
            alt="자취생"
            src={you1}
            style={{
              width: "100%",
              height: "28vh",
              objectFit: "cover",
              marginRight: "5%",
              borderBottom: "1px solid #C4C4C4",
            }}
          />
          <img
            alt="직장인"
            src={you2}
            style={{
              width: "100%",
              height: "28vh",
              objectFit: "cover",
              marginRight: "5%",
              borderBottom: "1px solid #C4C4C4",
            }}
          />
          <img
            alt="유학생"
            src={you3}
            style={{
              width: "100%",
              height: "28vh",
              objectFit: "cover",
              borderBottom: "1px solid #C4C4C4",
            }}
          />
        </Row>
        <Title size="48" weight="700" marginBottom="300">
          함께 해보자, 업사이클링!
        </Title>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default MyStory;
