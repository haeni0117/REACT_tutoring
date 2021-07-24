/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";

const Comment = (profileImg, userName, contents, date, setDay) => {
  return (
    <StyledWrapper>
      <StyledProfile src={profileImg} />
      <div
        css={css`
          background-color: black;
        `}
      ></div>

      <div
        css={css`
          background-color: yellow;
        `}
      >
        <StyledContentsWrapper>
          <Styledmargin href="https://www.google.com">muyaho_123</Styledmargin>
          <span
            css={css`
              color: black;
            `}
          >
            웹사이트 만든 거 처음이다 !~!~ 무야호ㅋㅋㅋㅋㅋ
          </span>
        </StyledContentsWrapper>
        <div
          css={css`
            display: flex;
            background-color: brown;
            justify-content: space-between;
            width: 33%;
          `}
        >
          <StyledDay
            onClick={() => {
              setDay(date + 1);
            }}
          >
            {date}일
          </StyledDay>
          <div
            css={css`
              cursor: pointer;
              font-weight: bold;
              color: rgb(142, 142, 142);
            `}
          >
            답글달기
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

{
  /* <StyledWrapper>
  <div
    css={css`
      background-color: black;
    `}
  >
    <StyledProfile src={PostImg} />
  </div>

  <div
    css={css`
      background-color: yellow;
    `}
  >
    <StyledContentsWrapper>
      <Styledmargin href="https://www.google.com">muyaho_123</Styledmargin>
      <span
        css={css`
          color: black;
        `}
      >
        웹사이트 만든 거 처음이다 !~!~ 무야호ㅋㅋㅋㅋㅋ
      </span>
    </StyledContentsWrapper>
    <div
      css={css`
        display: flex;
        background-color: brown;
        justify-content: space-between;
        width: 33%;
      `}
    >
      <StyledDay
        onClick={() => {
          setDay(day + 1);
        }}
      >
        {day}일
      </StyledDay>
      <div
        css={css`
          cursor: pointer;
          font-weight: bold;
          color: rgb(142, 142, 142);
        `}
      >
        답글달기
      </div>
    </div>
  </div>
</StyledWrapper>; */
}
export default Comment;
const StyledProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  overflow: hidden;
  margin-right: 16px;
`;

const StyledDay = styled.div`
  font-size: 16px;
  color: rgb(142, 142, 142);
`;
const Styledmargin = styled.a`
  text-decoration: none;
  color: black;
  font-weight: bold;
  margin-right: 8px;
`;
const StyledWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;
const StyledContentsWrapper = styled.div`
  margin-bottom: 19px;
`;
