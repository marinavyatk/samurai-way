import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {StoreType} from "../redux/store";

type MessageItemType = {
    id:number,
    message: string
}

type DialogStateType = {
    dialogs: DialogItemType[],
    messages: MessageItemType[],
    newMessageBody: string
}
type DialogsType = {
    dialogs: DialogStateType
    onSendMessageClick: () => void
    onNewMessageChange: (body: string) => void
}

const Dialogs = (props: DialogsType) => {
debugger;
    let dialogsState = props.dialogs;

    let dialogsElements = dialogsState.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = dialogsState.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = dialogsState.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.onNewMessageChange(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;