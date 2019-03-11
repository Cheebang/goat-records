import React from "react";
import styled from "styled-components";
import * as moment from "moment";

export const Container = styled.div`
  padding: 16px;
  background: black;
  text-align: center;
  color: white;
  box-shadow: 0px 4px 32px 0px rgba(0, 0, 0, 0.75);
`;

const getCurrentYear = () => moment().year();
const Footer = () => <Container>© {getCurrentYear()} Goat Records</Container>;

export default Footer;
