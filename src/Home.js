import React from "react";
import logo from "./goat records.png";
import styled from "styled-components";
import { Content, InnerContent } from "./commonstyles";

export const Logo = styled.img`
  min-width: 288px;
  width: 100%;
`;

export const Home = () => (
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
          if a picture is worth a thousand words. a video is worth a million.
        </q>
        - <em>advertising expert</em>
      </p>
    </InnerContent>
  </Content>
);
