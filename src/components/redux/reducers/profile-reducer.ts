import {v1} from "uuid";
import {StoreType} from "../store";

type ProfileReducerAT = AddPostAT | editPostAT
type AddPostAT = {
    type: "ADD-POST"
}
type editPostAT = {
    type: "EDIT-POST",
    newText: string
}

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com'
};

export const ProfileReducer = (state=initialState, action: ProfileReducerAT) => {
    switch (action.type)  {
        case "ADD-POST":
            let newPost = {
                    id: v1(),
                    message: state.newPostText,
                likesCount: 0
    }
    // const updatedState =  {...state.posts, newPost};
    //         state.newPostText = '';
    //         return updatedState;
            return {
                ...state,
                posts: [...state.posts, newPost], // Добавляем новый пост в массив
                newPostText: '' // Очищаем newPostText
            };
case "EDIT-POST":
    return {...state, newPostText: action.newText};
        default: return  state;
}

}

export const addPostAC = () => ({
    type: "ADD-POST"
});
export const editPostAC = (text: string) => ({
    type: "EDIT-POST",
    newText: text
});