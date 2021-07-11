/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import PostImg from "../assets/images/image1.jpeg";
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
          padding: 15px 17px 20px 15px;
        `}
      >
        <StyledProfile>
          <img
            css={css`
              width: 100%;
              height: 100%;
            `}
            src={MyProfile}
          />
        </StyledProfile>
        <div
          css={css`
            margin-left: 16px;
          `}
        >
          <Styledmargin
            css={css`
              font-weight: bold;
            `}
            href="https://www.google.com"
          >
            youlakk
          </Styledmargin>
          <span
            css={css`
              color: black;
            `}
          >
            태국 파얍대학교 뒷골목에 있던 카페🌽 정말 행복해보인당💛💛💛
          </span>
          <div
            css={css`
              margin-top: 25px;
              margin-bottom: 20px;
              color: navy;
            `}
          >
            <Styledmargin href="https://www.google.com/search?q=%EA%B3%A0%EA%B3%A0%ED%8C%AC%EC%B8%A0+3%EC%84%B8%EB%8C%80&ei=QprqYNmPFsem0wSYw4mIBQ&oq=%EA%B3%A0%EA%B3%A0%ED%8C%AC%EC%B8%A0+3%EC%84%B8%EB%8C%80&gs_lcp=Cgdnd3Mtd2l6EAM6CAgAELEDEIMBOgUIABCxAzoECAAQCjoCCAA6BAgAEEM6BwgAELEDEEM6BggAEAUQHkoECEEYAFD6CFjQLGDaMWgNcAB4AoABhgGIAaYRkgEEMS4xOZgBAKABAaoBB2d3cy13aXqwAQDAAQE&sclient=gws-wiz&ved=0ahUKEwjZuLyCvNrxAhVH05QKHZhhAlEQ4dUDCA4&uact=5">
              #고고팬츠 3세대
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
      </div>
    </div>
  );
};
export default Post;

const StyledProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  overflow: hidden;
`;

const StyledDay = styled.div`
  font-size: 16px;
  color: rgb(142, 142, 142);
`;
const Styledmargin = styled.a`
  text-decoration: none;
  color: black;
`;
