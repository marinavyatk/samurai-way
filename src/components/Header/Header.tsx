import React from 'react';
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {AuthStateType} from "../redux/reducers/auth-reducer";

type HeaderType = {
    authData: AuthStateType
}
export const Header = (props: HeaderType) => {
    return (<div className={`header ${s.header}`}>
        <div className={s.networkLogoAndName}>
            <img width={'50px'} src={'https://ifab.se/wp-content/uploads/2019/12/Your_Logo-OUR-PRODUCTS.png'}/>
            <p>Network Name</p>
        </div>
        <div className={s.loginBlock}>
            {props.authData.isAuth ? props.authData.login : <NavLink to={'/login'}>
                Login
            </NavLink>}

        </div>
        <p>Settings</p>

    </div>)
}

// const HeaderWrapper = styled.div`
// grid-area: header;
//   display: flex;
//   background-color: antiquewhite;
// `
