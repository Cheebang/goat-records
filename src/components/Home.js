import React from "react";
import axios from "axios";
import logo from "./goat records.png";
import styled from "styled-components";
import { Content, InnerContent } from "./commonstyles";

const homepageContentApi =
  "http://goatrecords.com.au/wp-json/wp/v2/pages?slug=goat-records-record-keeping-agency";

export const Logo = styled.img`
  min-width: 256px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 16px;
  display: block;
`;

const MainContent = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 32px;
  margin-bottom: 48px;
`;

const Heading = styled.h1`
  margin-bottom: 16px;
`;

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios(homepageContentApi).then(response =>
      this.setState({ content: response.data[0].content.rendered })
    );
  }

  render() {
    return (
      <Content>
        <InnerContent>
          <Logo src={logo} alt="Logo" />
          <MainContent>
            <Heading>Melbourne Content Creators</Heading>
            <p>
              family run creation company.
              <br />
              specialising in film / photo / sound
              <br />
              integrates creativity & business
            </p>
            <p>
              <q>
                if a picture is worth a thousand words. a video is worth a
                million.
              </q>
              - <em>advertising expert</em>
            </p>
          </MainContent>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </InnerContent>
      </Content>
    );
  }
}
