import {connect} from "react-redux";
import {StoreType} from "../redux/store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, togglePreloadingAC,
    unfollowAC,
    UserType
} from "../redux/reducers/user-reducer";
import {UsersPresentationalComponent, UsersResponseType} from "./UsersPresentationalComponent";
import React from "react";
import axios from "axios";
import {Preloader} from "../common/Preloader";

export type UsersPropsType = {
    usersPage: UsersResponseType & { page: number, currentPage: number, isPreloading: boolean },
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    togglePreloader: (isPreloading: boolean) => void
}

export class UsersSecondContainer extends React.Component<UsersPropsType, StoreType> {
    componentDidMount() {
        this.props.togglePreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.page}`)
            .then(result => {
                this.props.setUsers(result.data.items)
                this.props.setTotalUsersCount(result.data.totalCount)
                this.props.togglePreloader(false)
            })
    }

    onPageChange = (page: number) => {
        this.props.togglePreloader(true)
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.usersPage.page}`)
            .then(result => {
                this.props.setUsers(result.data.items)
                this.props.setTotalUsersCount(result.data.totalCount)
                this.props.togglePreloader(false)

            })
    }

    render() {
        return (
            this.props.usersPage.isPreloading ? <Preloader/> :
                <UsersPresentationalComponent
                    users={this.props.usersPage.items}
                    totalCount={this.props.usersPage.totalCount}
                    page={this.props.usersPage.page}
                    currentPage={this.props.usersPage.currentPage}
                    onPageChange={this.onPageChange}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />)
    }
}


const mapStateToProps = (state: StoreType) => {
    return {
        usersPage: state.usersPage,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalUsersCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         togglePreloader: (isPreloading: boolean) => {
//             dispatch(togglePreloadingAC(isPreloading))
//         }
//     }
// }


export const UsersFirstContainer = connect(mapStateToProps, {
    follow: followAC,
    unfollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    togglePreloader: togglePreloadingAC
})(UsersSecondContainer);