import React, { useEffect } from 'react';
import {followAC, setUsersAC, unfollowAC, UserType} from "../redux/reducers/user-reducer";
import axios from "axios";
import defaultUserPhoto from '../../img/defaultUserPhoto.jpg'

export type UsersResponseType = {
    items: UserType[],
    totalCount: number,
    error: null
}

type UsersPropsType = {
    usersPage: UsersResponseType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('https://social-network.samuraijs.com/api/1.0/users/');
            props.setUsers(response.data.items);
        }
        fetchUsers();
    }, [])


    // axios.get('https://social-network.samuraijs.com/api/1.0/users/')
    //     .then(result => {
    //         props.setUsers(result.data.items)
    //     })
    // if (props.usersPage.users.length === 0) {
    //     props.setUsers([
    //             {
    //                 id: 1,
    //                 photoUrl: 'https://pp.userapi.com/c636721/v636721328/117cf/vCGftGf4xaY.jpg',
    //                 followed: false,
    //                 fullName: 'Dmitry',
    //                 status: 'I am a boss',
    //                 location: {city: 'Minsk', country: 'Belarus'}
    //             }
    //             ,
    //             {
    //                 id: 2,
    //                 photoUrl: 'https://pp.userapi.com/c636721/v636721328/117cf/vCGftGf4xaY.jpg',
    //                 followed: true,
    //                 fullName: 'Sasha',
    //                 status: 'I am a boss too',
    //                 location: {city: 'Moscow', country: 'Russia'}
    //             },
    //             {
    //                 id: 3,
    //                 photoUrl: 'https://pp.userapi.com/c636721/v636721328/117cf/vCGftGf4xaY.jpg',
    //                 followed: false,
    //                 fullName: 'Andrew',
    //                 status: 'I am a boss too',
    //                 location: {city: 'Kiev', country: 'Ukraine'}
    //             }
    //         ]
    //     )
    // }


    return (
        <div>
            {props.usersPage.items.map(u => {

                return <div>
                    <div>
                        <img src={u.photos.small === null ? defaultUserPhoto : u.photos.small} width={100}/>
                        {u.name}
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>'Unfollow'</button> :
                            <button onClick={() => props.follow(u.id)}>'Follow'</button>
                        }

                    </div>
                    <div>
                        {u.status}
                        {'u.location.country'}
                        {'u.location.city'}
                    </div>

                </div>
            })}
        </div>
    );
};
