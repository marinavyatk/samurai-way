import {v1} from "uuid";

type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}
type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType
    photos: PhotosType
}

type AddPostAT = {
    type: "ADD-POST"
}
type editPostAT = {
    type: "EDIT-POST",
    newText: string
}
type setUserProfileAT = {
    type: "SET-USER-PROFILE",
    profile: ProfileType
}
type ProfileReducerAT = AddPostAT | editPostAT | setUserProfileAT
let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    newPostText: 'it-kamasutra.com',
    profile: null
};

export const ProfileReducer = (state = initialState, action: ProfileReducerAT) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost], // Добавляем новый пост в массив
                newPostText: '' // Очищаем newPostText
            };
        case "EDIT-POST":
            return {...state, newPostText: action.newText};
        case "SET-USER-PROFILE":{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}

export const addPostAC = () => ({
    type: "ADD-POST"
});
export const editPostAC = (text: string) => ({
    type: "EDIT-POST",
    newText: text
});
export const setUserProfileAC = (profile: ProfileType) => ({
    type: "SET-USER-PROFILE",
    profile
})