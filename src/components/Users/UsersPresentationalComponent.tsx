import React from 'react';
import {UserType} from "../redux/reducers/user-reducer";
import defaultUserPhoto from '../../img/defaultUserPhoto.jpg'
import sUsers from './Users.module.css'
import {NavLink} from "react-router-dom";


export type UsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: null | string
}
type UsersPresentationalComponentType = {
    users: UserType[],
    totalCount: number,
    page: number,
    currentPage: number,
    onPageChange: (page: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void
}
export const UsersPresentationalComponent = (props: UsersPresentationalComponentType) => {
    const pagesCount = Math.ceil(props.totalCount / props.page);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map((el,index) => {
                    return <span
                        key={index}
                        className={props.currentPage === el ? sUsers.selected : ''}
                        onClick={() => props.onPageChange(el)}>{el} </span>
                })}
            </div>
            {props.users.map((u: UserType) => {
                return <div key={u.id}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                        <img src={u.photos.small === null ? defaultUserPhoto : u.photos.small} width={100} alt={'user photo'}/>
                        </NavLink>
                        {u.name}
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>'Unfollow'</button> :
                            <button onClick={() => props.follow(u.id)}>'Follow'</button>
                        }
                    </div>
                    <div>
                        {u.status}
                    </div>

                </div>
            })}
        </div>
    );
}