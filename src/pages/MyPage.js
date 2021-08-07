/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import PostImg from "../assets/images/image1.jpeg";
import MyProfileImg from "../assets/images/image1.jpeg";
import CommentProfileImg from "../assets/images/image1.jpeg";
import Comment from "./components/comment";
import Modal from "./components/modal";

const Mypage = () => {
  return (
    <div css={{ backgroundColor: "pink" }}>
      <div css={{ backgroundColor: "orange", display: flex }}>
        <CircularProfileImg
          width={150}
          height={150}
          src={MyProfileImg}
        ></CircularProfileImg>
      </div>
      <div>
        <CircularProfileImg
          width={150}
          height={150}
          src={MyProfileImg}
        ></CircularProfileImg>
      </div>
    </div>
  );
};
export default Mypage;

const circularProfile = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  border-radius: 70%;
  margin-right: 17px;
`;
