import React from "react";
import axios from "axios";
import logo from "./goat records.png";
import styled from "styled-components";
import { InnerContent } from "./commonstyles";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import { withMedia } from "react-media-query-hoc";
import Fade from "react-reveal/Fade";

const homepageContentApi =
  "http://goatrecords.com.au/wp-json/wp/v2/pages?slug=goat-records-record-keeping-agency";

export const Logo = styled.img`
  min-width: 256px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  margin-bottom: 16px;
  display: block;
`;

const MainContent = styled.div`
  padding-top: 32px;
  margin-bottom: 48px;
`;

const Heading = styled.h1`
  margin-bottom: 16px;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: ${({ media }) => (media.mobile ? "column" : "row")};
  margin: 100px 0;
`;

const Content = styled.div`
  flex: 1;
  margin: 0 auto;
  max-width: 700px;
  width: 100%;
`;

const CardContainer = styled.a`
  height: 400px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;


const CardImage = styled.img`
  flex: 1;
  object-fit: cover;
  height: 100%;
`;

const Card = ({ title, imageSrc }) => (
  <CardContainer href={"/" + title}>
    <CardImage src={imageSrc} />
  </CardContainer>
);

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
      <>
        <BannerContainer>
          <ParallaxBanner
            style={{ height: "80vh", minHeight: "300px" }}
            layers={[
              {
                amount: 1,
                children: (
                  <iframe
                    title="banner"
                    width="100%"
                    src="https://www.youtube.com/embed/_tb30KJT_ao?autoplay=1"
                    frameborder="0"
                    allowfullscreen
                  />
                )
              }
            ]}
          />
        </BannerContainer>
        <Parallax>
          <Content>
            <InnerContent>
              <Fade bottom>
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
              </Fade>
            </InnerContent>
          </Content>
          <Fade duration={1000} delay={300} bottom>
            <Logo src={logo} alt="Logo" />
          </Fade>
          <Fade bottom cascade>
            <CardsContainer media={this.props.media}>
              <Card
                title="Film"
                imageSrc="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/49841021_1162896827203983_6702065190009044992_n.jpg?_nc_cat=111&_nc_ht=scontent-syd2-1.xx&oh=841d5974b23926890eb64585b1338f10&oe=5D2587FC"
              />
              <Card
                title="Photo"
                imageSrc="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/52911292_1194516657375333_244757013534343168_n.jpg?_nc_cat=108&_nc_ht=scontent-syd2-1.xx&oh=22dc39bc5e9a85df3c095ad5b2458726&oe=5D0D853F"
              />
              <Card
                title="Sound"
                imageSrc="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/51290746_1175256059301393_967562948178345984_o.jpg?_nc_cat=107&_nc_ht=scontent-syd2-1.xx&oh=06768c5cfaf080708378850c6738bb7e&oe=5D1BF772"
              />
            </CardsContainer>
          </Fade>
        </Parallax>
      </>
    );
  }
}

export default withMedia(Home);
