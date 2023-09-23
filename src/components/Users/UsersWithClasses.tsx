import React, {Component} from 'react';
import {followAC, setUsersAC, unfollowAC, UserType} from "../redux/reducers/user-reducer";
import axios from "axios";
import defaultUserPhoto from '../../img/defaultUserPhoto.jpg'
import {StoreType} from "../redux/store";
import sUsers from './Users.module.css'


export type UsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: null | string
}
type UsersWithClassesStateType = {}

export type UsersPropsType = {
    usersPage: UsersResponseType&{page:number, currentPage: number},
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
}


export class UsersWithClasses extends React.Component<UsersPropsType, StoreType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.page}`)
            .then(result => {
                this.props.setUsers(result.data.items)
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.usersPage.totalCount / this.props.usersPage.page);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        console.log(pages)
        return (
            <div>
                <div>
                    {pages.map(el => {
                        return <span
                        className={this.props.usersPage.currentPage === el ? sUsers.selected : ''}
                        onClick={()=>this.props.setCurrentPage(el)}>{el}</span>})}
                </div>
                {this.props.usersPage.items.map((u: any) => {

                    return <div>
                        <div>
                            <img src={u.photos.small === undefined ? defaultUserPhoto : u.photos.small} width={100}/>
                            {u.name}
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>'Unfollow'</button> :
                                <button onClick={() => this.props.follow(u.id)}>'Follow'</button>
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
}
