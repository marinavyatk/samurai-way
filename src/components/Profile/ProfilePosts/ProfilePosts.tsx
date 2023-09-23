import React from 'react';
import {ProfilePostItem, ProfilePostItemType} from "./ProfilePostItem";

type ProfileOnePost = ProfilePostItemType & { id: number }
type PostsStateType = {
    posts: ProfileOnePost[],
    newPostText: string
}


type ProfilePostsType = {
    postsState:PostsStateType,
    addPost: ()=> void,
    updateNewPostText: (updatedText:string)=>void
}
const ProfilePosts = (props: ProfilePostsType) => {
    debugger;
    let postsElements =
        props.postsState.posts.map(post => <ProfilePostItem message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current? newPostElement.current.value: '';
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3>Latest posts:</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.postsState.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
};

export default ProfilePosts;