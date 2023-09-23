import {UsersResponseType, UsersWithClasses} from "../../Users/UsersWithClasses";

const follow = 'FOLLOW'
const unfollow = 'UNFOLLOW'
const setUsers = 'SET-USERS'
const setCurrentPage = 'SET-CURRENT-PAGE'

// type LocationType = {
//     country: string,
//     city: string
// }
type PhotosType = {
    small: undefined,
    large: undefined
}
export type UserType = {
    name: string,
    id: number,
    photos: PhotosType,
    status: string,
    followed: boolean,
// photoUrl: string,
    // location: LocationType
}

type FollowAT = {
    type: 'FOLLOW',
    userId: number
}
type UnfollowAT = {
    type: 'UNFOLLOW',
    userId: number
}
type SetUsersAT = {
    type: 'SET-USERS',
    users: UserType[]
}
type setCurrentPageAT = {
    type: 'SET-CURRENT-PAGE',
    pageNumber: number
}

type UsersActionCommonType = FollowAT | UnfollowAT | SetUsersAT | setCurrentPageAT

const initState: UsersResponseType & { page: number, currentPage: number } = {
    items: [],
    totalCount: 10,
    error: null,
    page: 5,
    currentPage: 1
}
// users:[{
//             id: 6,
//             photoUrl: 'https://pp.userapi.com/c636721/v636721328/117cf/vCGftGf4xaY.jpg',
//             followed: false,
//             fullName: 'Initial User',
//             status: 'I am an Initial User',
//             location: {city: 'Minsk', country: 'Belarus'}
//         }]
// users: [
//     {
//         id: 1,
//         photoUrl: 'https://pp.userapi.com/c636721/v636721328/117cf/vCGftGf4xaY.jpg',
//         followed: false,
//         fullName: 'Dmitry',
//         status: 'I am a boss',
//         location: {city: 'Minsk', country: 'Belarus'}
//     }
//     ,
//     {
//         id: 2,
//         photoUrl: 'https://pp.userapi.com/c636721/v636721328/117cf/vCGftGf4xaY.jpg',
//         followed: true,
//         fullName: 'Sasha',
//         status: 'I am a boss too',
//         location: {city: 'Moscow', country: 'Russia'}
//     },
//     {
//         id: 3,
//         photoUrl: 'https://pp.userapi.com/c636721/v636721328/117cf/vCGftGf4xaY.jpg',
//         followed: false,
//         fullName: 'Andrew',
//         status: 'I am a boss too',
//         location: {city: 'Kiev', country: 'Ukraine'}
//     }
// ]

export const UserReducer = (state = initState, action: UsersActionCommonType) => {
    switch (action.type) {
        case follow: {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: true} : el)}
        }
        case unfollow: {
            return {...state, items: state.items.map(el => el.id === action.userId ? {...el, followed: false} : el)}
        }
        case setUsers: {
            return {...state, items: [...state.items, ...action.users]}
        }
        case setCurrentPage: {
            return {...state, currentPage: action.pageNumber}
        }
        default:
            return state;
    }

}

export const followAC = (userId: number) => ({type: follow, userId})
export const unfollowAC = (userId: number) => ({type: unfollow, userId})
export const setUsersAC = (users: UserType[]) => ({type: setUsers, users})
export const setCurrentPageAC = (pageNumber: number) => ({
    type: setCurrentPage, pageNumber
})