/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import PostImg from "../assets/images/image1.jpeg";
import re1 from "../assets/images/image2.jpeg";
import re2 from "../assets/images/img3.jpeg";
import MyProfile from "../assets/images/프로필.jpeg";

const Post = () => {
  const [day, setDay] = useState(1);
  return (
    //<><div>난 여락이들이야 만나서 반가워 ㅎㅎ</div>
    <div
      css={css`
        display: flex;
        background-color: white;
      `}
    >
      <img
        css={css`
          width: 600px;
          height: 600px;
        `}
        src={PostImg}
      />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          // padding: 15px 17px 20px 15px;
          background-color: skyblue;
        `}
      >
        <div
          css={css`
            background-color: yellowgreen;
            display: flex;
            padding: 21px 17px 15px 19px;
            border-bottom: 1px solid black;
          `}
        >
          <div>
            <StyledProfile src={PostImg} />
          </div>

          <div>
            <div
              css={css`
                font-weight: bold;
                margin-bottom: 3px;
              `}
            >
              yeonjuice
            </div>

            <div>Chiang Mai,Thailand</div>
          </div>
        </div>
        <div
          css={css`
            background-color: pink;
            //display: flex;
            //padding: 24px 27px 11px 17px;
          `}
        >
          <StyledWrapper>
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
                margin-bottom
              `}
            >
              <StyledContentsWrapper>
                <Styledmargin href="https://www.google.com">
                  youlakk
                </Styledmargin>
                <span
                  css={css`
                    color: black;
                  `}
                >
                  태국 파얍대학교 뒷골목에 있던 카페🌽 정말 행복해보인당💛💛💛
                </span>
              </StyledContentsWrapper>
              <div
                css={css`
                  //margin-top: 25px;
                  margin-bottom: 20px;
                  color: navy;
                `}
              >
                <Styledmargin
                  css={css`
                    font-weight: normal;
                    color: navy;
                  `}
                  href="https://www.google.com/search?q=%EA%B3%A0%EA%B3%A0%ED%8C%AC%EC%B8%A0+3%EC%84%B8%EB%8C%80&ei=QprqYNmPFsem0wSYw4mIBQ&oq=%EA%B3%A0%EA%B3%A0%ED%8C%AC%EC%B8%A0+3%EC%84%B8%EB%8C%80&gs_lcp=Cgdnd3Mtd2l6EAM6CAgAELEDEIMBOgUIABCxAzoECAAQCjoCCAA6BAgAEEM6BwgAELEDEEM6BggAEAUQHkoECEEYAFD6CFjQLGDaMWgNcAB4AoABhgGIAaYRkgEEMS4xOZgBAKABAaoBB2d3cy13aXqwAQDAAQE&sclient=gws-wiz&ved=0ahUKEwjZuLyCvNrxAhVH05QKHZhhAlEQ4dUDCA4&uact=5"
                >
                  #고고팬츠
                </Styledmargin>
              </div>
              <StyledDay
                onClick={() => {
                  setDay(day + 1);
                }}
              >
                {day}일
              </StyledDay>
            </div>
          </StyledWrapper>

          <StyledWrapper>
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
                <Styledmargin href="https://www.google.com">
                  muyaho_123
                </Styledmargin>
                <span
                  css={css`
                    color: black;
                  `}
                >
                  웹사이트 만든 거 처음이다 !~!~ 무야호ㅋㅋㅋㅋㅋ
                </span>
              </StyledContentsWrapper>

              <StyledDay
                onClick={() => {
                  setDay(day + 1);
                }}
              >
                {day}일
              </StyledDay>
            </div>
          </StyledWrapper>
        </div>
      </div>
    </div>
  );
};
export default Post;

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
