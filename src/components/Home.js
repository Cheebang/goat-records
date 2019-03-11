import React from "react";
import axios from "axios";
import logo from "./goat records.png";
import styled from "styled-components";
import { Content, InnerContent } from "./commonstyles";

export const Logo = styled.img`
  min-width: 288px;
  width: 100%;
`;

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios(
      "http://goatrecords.com.au/wp-json/wp/v2/pages?slug=goat-records-record-keeping-agency"
    ).then(response =>
      this.setState({ content: response.data[0].content.rendered })
    );
  }

  render() {
    return (
      <Content>
        <InnerContent>
          <Logo src={logo} alt="Logo" />
          <h1>Melbourne Content Creators</h1>
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
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </InnerContent>
      </Content>
    );
  }
}
