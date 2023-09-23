import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../redux/reducers/dialogs-reducer";
import {connect} from "react-redux";
import {StoreType} from "../redux/store";
import {Dispatch} from "redux";

const mapStateToProps = (state: StoreType) => {
    return {
       dialogs: state.dialogs
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        },

        onNewMessageChange: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;