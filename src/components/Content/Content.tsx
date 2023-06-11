import React from 'react';
import styled from "styled-components";
import s from './Content.module.css'
import {Post} from "../Post/Post";

export const Content = () => {
    return (
        <div className={`content ${s.content}`}>
            <img className={s.mainImage}
                 src={'https://vsegda-pomnim.com/uploads/posts/2022-02/1645922108_2-vsegda-pomnim-com-p-polyarnoe-siyanie-foto-2.jpg'}/>
            <img  className={s.avatar} width={'300px'}
                 src={'https://mobile-comp.com/images/user.png'}/>
            <p>Profile Description</p>
            <div>Latest posts</div>
            <Post postText={"hgjgjhhjgffv"}/>
        </div>
    );
};

// const ContentWrapper = styled.div`
// grid-area: content;
//   background-color: cadetblue;
// `