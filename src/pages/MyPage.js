/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import PostImg from "../assets/images/image1.jpeg";
import MyProfileImg from "../assets/images/image1.jpeg";
import CommentProfileImg from "../assets/images/image1.jpeg";
import Comment from "./components/comment";
import Modal from "./components/modal";
import Highlight from "./components/highlight";
import HighlightData from "/Users/gimsuyeon/Documents/GitHub/REACT_tutoring/src/pages/data/HightlightData";

const Mypage = () => {
  return (
    <div css={{ backgroundColor: "white" }}>
      <div css={{ backgroundColor: "orange", display: "flex" }}>
        <CircularProfileImg width={150} height={150} src={MyProfileImg} />

        <div
          css={css`
            display: flex;
            padding-bottom: 20px;
          `}
        >
          <StyledNickname>youlakk</StyledNickname>
          <StyledFollowButton>follow</StyledFollowButton>
        </div>
      </div>
      <HighlightWrapper>
        {HighlightData.map((item, i) => (
          <Highlight title={item.title} imgUrl={item.imgUrl} />
        ))}
      </HighlightWrapper>
    </div>
  );
};
export default Mypage;

const CircularProfileImg = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 100%;
`;

const HighlightWrapper = styled.div`
  display: flex;
  padding: 0 24px;
  margin-bottom: 83px;
`;
const StyledNickname = styled.div`
  font-size: 28px;
  font-weight: 300px;
`;
const StyledFollowButton = styled.button`
  background-color: rgb(0, 149, 256);
  font-size: 14px;
  height: 30px;
  color: white;
  font-weight: bold;
  border-radius: 13%;
  border: 0;
  outline: 0;
  padding: 5px 9px;
`;
