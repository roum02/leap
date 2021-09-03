import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import Title from "../components/Title";
import Image from "../components/Image";

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
  padding-right: 3rem;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin-right: 5rem;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
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
          <Title size="15" weight="700" marginLeft="10">
            인스타 주소
          </Title>
        </Row>
        <Link href="https://roum02.github.io/reap/#/">
          <Row>
            <img src={home} style={{ width: "3rem" }} />
            <Title size="15" weight="700" marginLeft="10">
              https://roum02.github.io/reap/#/
            </Title>
          </Row>
        </Link>
      </Row>
    </FooterImg>
  );
};

export default Footer;
