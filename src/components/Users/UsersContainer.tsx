import {connect} from "react-redux";
import {StoreType} from "../redux/store";
import {Dispatch} from "redux";
import {followAC, setCurrentPageAC, setUsersAC, unfollowAC, UserType} from "../redux/reducers/user-reducer";
import {UsersWithClasses} from "./UsersWithClasses";

const mapStateToProps = (state: StoreType) => {
    return {
        usersPage: state.usersPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersWithClasses);