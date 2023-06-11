import React from 'react';
import styled from "styled-components";
import s from "./Header.module.css"

export const Header = () => {
    return (<div className={`header ${s.header}`}>
        <div className={s.networkLogoAndName}>
<img width={'50px'} src={'https://ifab.se/wp-content/uploads/2019/12/Your_Logo-OUR-PRODUCTS.png'}/>
        <p>Network Name</p>
    </div>
        <p>Settings</p>

    </div>)
}

// const HeaderWrapper = styled.div`
// grid-area: header;
//   display: flex;
//   background-color: antiquewhite;
// `
