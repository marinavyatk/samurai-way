import React from 'react';
import styled from "styled-components";
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className={`sidebar ${s.sidebar}`}>
            <ul className={s.menu}>
                <li><NavLink to={'/profile'}>My profile</NavLink></li>
                <li><NavLink to={'/dialogs'}>Messages</NavLink></li>
                <li><NavLink to={'/feed'}>Feed</NavLink></li>
                <li><NavLink to={'/friends'}>Friends</NavLink></li>
                <li><NavLink to={'/groups'}>Groups</NavLink></li>
            </ul>
        </div>
    );
};

// const SidebarWrapper = styled.div`
// grid-area: sidebar;
//   background-color: cornflowerblue;
//   width: 25%;
// `