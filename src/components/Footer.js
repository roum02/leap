import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import Title from "../components/Title";

import footer from "../assets/footer.png";
import insta from "../assets/insta.png";
import home from "../assets/home.png";

const FooterImg = styled.div`
  width: 100%;
  height: 8rem;
  background-image: url(${footer});
  background-size: cover;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 1.5rem;
  padding-right: 100px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-right: 50px;
`;

const Footer = () => {
  return (
    <FooterImg>
      <Row>
        <Row>
          <Title size="20" weight="700">
            CONTACT US BY
          </Title>
        </Row>
        <Row>
          <img src={insta} />
          <Title size="18" weight="700" marginLeft="10">
            인스타 주소
          </Title>
        </Row>
        <Row>
          <img src={home} />
          <Title size="18" weight="700" marginLeft="10">
            홈페이지 주소
          </Title>
        </Row>
      </Row>
    </FooterImg>
  );
};

export default Footer;
