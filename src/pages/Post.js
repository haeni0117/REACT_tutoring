/** @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import react from "react";
import PostImg from '../assets/images/image1.jpeg';
import MyProfile from '../assets/images/프로필.jpeg';

const Post = () => {
    return (
    //<><div>난 여락이들이야 만나서 반가워 ㅎㅎ</div>
    <div css={css`display:flex;`}>
    <img css={css`width:600px;height:600px;`} src={PostImg}/>
    <div>
        <div css={css`width:40px;height:40px;border-radius:70%;overflow:hidden;`}> 
        <img css={css`width :100%;height :100%;`} src = {MyProfile}/>
        </div>
        <div>
        <span>youlakk</span>
        <span css={css`color:orange;`}>태국 파얍대학교 뒷골목에 있던 카페🌽 정말 행복해보인당💛💛💛</span>
        </div>
        </div>
    </div>
    );
};
export default Post;
