/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import PostImg from "../assets/images/image1.jpeg";
import MyProfileImg from "../assets/images/image1.jpeg";
import CommentProfileImg from "../assets/images/image1.jpeg";
import Comment from "./components/comment";

//icons
import {
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoHeartSharp,
} from "react-icons/io5";

const Post = () => {
  const [day, setDay] = useState(4);
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(3976);
  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <img
        css={css`
          width: 599px;
          height: 524px;
        `}
        src={PostImg}
      />

      <div
        css={css`
          background-color: skyblue;
        `}
      >
        <div
          css={css`
            display: flex;
            padding: 21px 17px 15px 19px;
            border-bottom: 1px solid black;
          `}
        >
          <StyledProfile src={MyProfileImg} />
          <div>
            <StyledLink>youlakk</StyledLink>
            <div>Chaing Mai, Thailand</div>
          </div>
        </div>
        <div
          css={css`
            background-color: pink;
            padding: 0 27px 11px 17px;
            border-bottom: 1px solid #262626;
          `}
        >
          <StyledWrapper>
            <StyledProfile src={MyProfileImg} />
            <div
              css={css`
                background-color: orange;
              `}
            >
              <StyledContentWrapper>
                <StyledLink href="#">youlakk</StyledLink>
                <span>
                  태국 파얍대학교 뒷골목에 있던 카페🌽 정말 행복해보인당💛💛💛
                </span>
              </StyledContentWrapper>

              <div
                css={css`
                  margin-bottom: 20px;
                `}
              >
                <StyledLink
                  css={css`
                    color: navy;
                    font-weight: normal;
                  `}
                  href="#"
                >
                  #고고팬츠3세대
                </StyledLink>
              </div>
              <StyledDate
                onClick={() => {
                  setDay(day + 1);
                }}
              >
                {day}일
              </StyledDate>
            </div>
          </StyledWrapper>
          <Comment
            profileImg={CommentProfileImg}
            userName={"gangyaho____"}
            contents={"좋아요 1등이다!! 처음으롭-!"}
            date={day}
            setDay={setDay}
          />
          <Comment
            profileImg={CommentProfileImg}
            userName={"yeonjuice_2000"}
            contents={"우유 들어간 큐브라떼 먹고 쾌변함"}
            date={day}
            setDay={setDay}
          />
          <Comment
            profileImg={CommentProfileImg}
            userName={"im._boxxa"}
            contents={"저는 복싱을 합니다."}
            date={day}
            setDay={setDay}
          />
        </div>
        <div
          css={css`
            background-color: yellow;
          `}
        >
          <div>
            {like === true ? (
              <IoHeartOutline
                onClick={() => {
                  setLike(false);
                  setLikeNum(likeNum - 1);
                }}
                css={Iconstyle}
              />
            ) : (
              <IoHeartSharp
                onClick={() => {
                  setLike(true);
                  setLikeNum(likeNum + 100);
                }}
                css={Iconstyle}
              />
            )}
            <IoPaperPlaneOutline css={Iconstyle} />
            <IoChatbubbleOutline css={Iconstyle} />
            <IoBookmarkOutline css={Iconstyle} />
          </div>
        </div>
        <div>like {likeNum}개</div>
      </div>
    </div>
  );
};

export default Post;

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
const Iconstyle = css`
  width: 24px;
  height: 24px;
`;
