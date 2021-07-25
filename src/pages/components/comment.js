/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
// const Comment = (props) => {
const Comment = ({ profileImg, userName, contents, date, setDay }) => {
  return (
    <StyledWrapper>
      <StyledProfile src={profileImg} />
      <div
        css={css`
          background-color: orange;
        `}
      >
        <StyledContentWrapper>
          <StyledLink href="#">{userName}</StyledLink>
          <span>{contents}</span>
        </StyledContentWrapper>
        <div
          css={css`
            display: flex;
            background-color: brown;
            //justify-content: space-between;
            // width: 33%;
          `}
        >
          <StyledDate
            onClick={() => {
              setDay(date + 1);
            }}
          >
            {date}일
          </StyledDate>
          <div
            css={css`
              cursor: pointer;
              font-weight: bold;
              color: rgb(142, 142, 142);
              margin-left: 20px;
            `}
          >
            답글 달기
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Comment;

const StyledProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  margin-right: 17px;
`;
const StyledDate = styled.div`
  font-size: 16px;
  color: rgb(142, 142, 142);
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  margin-right: 7px;
  font-weight: bold;
`;
const StyledWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;
const StyledContentWrapper = styled.div`
  display: inline;
  margin-bottom: 19px;
  background-color: green;
  align-items: center;
`;
// const IconStyle = css`
//   width: 24px;
//   height: 24px;
// `;
