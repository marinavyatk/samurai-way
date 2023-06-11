import React from 'react';
import styled from "styled-components";
import s from './Sidebar.module.css'

export const Sidebar = () => {
    return (
        <div className={`sidebar ${s.sidebar}`}>
<ul className={s.menu}>
    <li><a>My profile</a></li>
    <li><a>Messages</a></li>
    <li><a>News</a></li>
    <li><a>Friends</a></li>
    <li><a>Communities</a></li>
</ul>

        </div>
    );
};

// const SidebarWrapper = styled.div`
// grid-area: sidebar;
//   background-color: cornflowerblue;
//   width: 25%;
// `