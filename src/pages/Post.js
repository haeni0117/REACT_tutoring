/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import react, { useState } from "react";
import PostImg from "../assets/images/image1.jpeg";
import MyProfileImg from "../assets/images/image1.jpeg";
import CommentProfileImg from "../assets/images/image1.jpeg";
import Comment from "./components/comment";
import Modal from "./components/modal";

//icons
import {
  IoHeartOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
  IoBookmarkOutline,
  IoHeartSharp,
  IoEllipsisHorizontalSharp,
} from "react-icons/io5";
import { AiOutlineSmile } from "react-icons/ai";

const Post = () => {
  const [day, setDay] = useState(4);
  const [like, setLike] = useState(false);
  const [likeNum, setLikeNum] = useState(3976);
  const today = new Date();
  const [month, date] = [today.getMonth(), today.getDate()];
  const [reply, setReply] = useState();
  const handleSubmit = (e) => {
    setReply(e.target.value);
  };
  const [isModalVisibie, setModalVisibie] = useState(false);

  return (
    <div>
      <div
        css={css`
          display: flex;

          justify-content: center;
        `}
      >
        <img
          css={css`
            width: 599px;
            height: 654px;
          `}
          src={PostImg}
        />

        <div
          css={css`
            background-color: white;
            width: 70%;
            font-size: 20px;
            position: relative;
            justify-content: center;
          `}
        >
          <StyledProfileWrapper>
            <StyledProfile src={MyProfileImg} />
            <div>
              <StyledLink>youlakk</StyledLink>
              <div>Chaing Mai, Thailand</div>
            </div>
            <div>
              <IoEllipsisHorizontalSharp />
            </div>
          </StyledProfileWrapper>
          <div
            css={css`
              background-color: white;
              padding: 0 27px 11px 17px;
              border-bottom: 1px solid #262626;
            `}
          >
            <StyledWrapper>
              <StyledProfile src={MyProfileImg} />
              <div
                css={css`
                  background-color: white;
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
              background-color: white;
              padding: 15px 17px;
              border-bottom: 1px solid rgb(142, 142, 142);
            `}
          >
            <div>
              <div
                css={css`
                  justify-content: space-between;
                `}
              >
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
              </div>
              <div
                css={css`
                  justify-content: distance-between;
                `}
              >
                <IoBookmarkOutline css={Iconstyle} />
              </div>
            </div>
            <div
              css={css`
                font-weight: bold;
                margin-top: 13px;
                margin-bottom: 13px;
              `}
            >
              좋아요 {likeNum}개
            </div>
            <StyledDate fontSize={50}>
              {month + 1}월 {date}일
            </StyledDate>
          </div>
        </div>
        <div>
          <div>
            <AiOutlineSmile css={Iconstyle} />
            <input
              css={css`
                border: none;
                margin-left: 17px;
              `}
              type="text"
              placeholder="게시하기...."
              onChange={(value) => {
                setReply(value);
              }}
            />
            <StyledSubmitButton type="submit">게시</StyledSubmitButton>
          </div>
          {isModalVisibie && <Modal setModalVisibie={setModalVisibie} />}
        </div>
      </div>
    </div>
  );
};

export default Post;
const StyledProfileWrapper = styled.div`
  display: flex;
  padding: 21px 17px 15px 19px;
  border-bottom: 1px solid black;
`;

const StyledProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  margin-right: 17px;
`;
const StyledDate = styled.div`
  font-size: ${(props) => props.fontSize || 16}px;
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
  background-color: white;
  align-items: center;
`;
const Iconstyle = css`
  width: 24px;
  height: 24px;
`;
const StyledSubmitButton = styled.button`
rgb(142, 142, 142);
color:skyblue;
font-weight:bold;
fontsize:20px;`;
