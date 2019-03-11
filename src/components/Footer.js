import React from "react";
import styled from "styled-components";
import * as moment from "moment";

export const Container = styled.div`
  padding: 16px;
  border-top: 1px solid #ccc;
  text-align: center;
`;

const getCurrentYear = () => moment().year();

class Footer extends React.Component {
  render() {
    return <Container>© {getCurrentYear()} Goat Records</Container>;
  }
}

export default Footer;
