/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import StreakImg from "/Users/gimsuyeon/Documents/GitHub/REACT_tutoring/src/assets/images/image1.jpeg";

const Highlight = ({ title, imgUrl }) => {
  return (
    <Wrapper>
      <HightlightCoverImgWrapper>
        <HighlightCoverImg src={imgUrl} />
      </HightlightCoverImgWrapper>
      <HighlightTitle>{title}</HighlightTitle>
      <div
        css={css`
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 85px;
          padding-top: 15px;
          font-weight: 600;
        `}
      ></div>
    </Wrapper>
  );
};
export default Highlight;

const HighlightCoverImg = styled.img`
  width: 77px;
  height: 77px;
  border-radius: 70%;
  align-items: center;
`;
const HightlightCoverImgWrapper = styled.div`
  width: 87px;
  height: 87px;
  border-radius: 70%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(38, 38, 38);
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  text-align: center;
  padding: 10px 15px;
`;

const HighlightTitle = styled.div``;
