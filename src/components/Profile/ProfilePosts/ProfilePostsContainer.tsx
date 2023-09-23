import React from 'react';
import {connect} from "react-redux";
import ProfilePosts from "./ProfilePosts";
import {StoreType} from "../../redux/store";
import {Dispatch} from "redux";
import {addPostAC, editPostAC} from "../../redux/reducers/profile-reducer";


const mapStateToProps = (state: StoreType)=>{
    return {
        postsState: state.profile
    }
}
const mapDispatchToProps = (dispatch: Dispatch)=>{
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (updatedText:string) => {
            dispatch(editPostAC(updatedText));
        }
    }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer;
