import React from "react";
import { Content, InnerContent } from "./commonstyles";
import axios from "axios";

export class ContentPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios(
      "http://goatrecords.com.au/wp-json/wp/v2/pages?slug=" + this.props.slug
    ).then(response =>
      this.setState({ content: response.data[0].content.rendered })
    );
  }

  render() {
    return (
      <Content>
        <InnerContent>
          <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
        </InnerContent>
      </Content>
    );
  }
}
