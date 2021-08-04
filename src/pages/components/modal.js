import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";

const Modal = ({ setModalVisibie }) => {
  return (
    <div
      css={css`
        width: 400px;
        border-radius: 13px;
        height: fit-content;
        border: 1px solid rgb(142, 142, 142);
        bottom: -450px;
        left: 300px;
        background-color: white;
      `}
    >
      <StyledModalButton
        css={css`
          font-weight: bold;
          color: red;
        `}
      >
        신고
      </StyledModalButton>
      <StyledModalButton>태그된 계정</StyledModalButton>
      <StyledModalButton>공유대상</StyledModalButton>
      <StyledModalButton>링크복사</StyledModalButton>
      <StyledModalButton>퍼가기</StyledModalButton>
      <StyledModalButton>취소</StyledModalButton>
      <StyledModalButton
        css={css`
          border: none;
        `}
        onClick={() => {
          setModalVisibie(false);
        }}
      ></StyledModalButton>
    </div>
  );
};
export default Modal;

const StyledModalButton = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 13px;
  height: fit-content;
  justify-content: center;
`;
