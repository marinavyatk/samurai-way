import {StoreType} from "../store";

type DialogsReducerType = SendMessageAT | UpdateNewMessageBodyAT
type SendMessageAT = {
    type: 'SEND-MESSAGE'
}
type UpdateNewMessageBodyAT = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ""
};
export const DialogsReducer = (state=initialState, action: DialogsReducerType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {...state, newMessageBody: action.body};
        case 'SEND-MESSAGE':
            return {...state, messages: [...state.messages, {id: 6, message: state.newMessageBody}]}
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: 'SEND-MESSAGE'})
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: 'UPDATE-NEW-MESSAGE-BODY', body: body})
