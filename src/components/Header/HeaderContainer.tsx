import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {Header} from "./Header";
import {StoreType} from "../redux/store";
import {AuthStateType, setAuthUserDataAC} from "../redux/reducers/auth-reducer";


type HeaderContainerType = {
    authData: AuthStateType,
    setAuthUserData: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerType, StoreType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true, headers:{"API-KEY": 'e9641289-ee14-4d73-be86-68e64b3c2a02'}})
            .then(res => {
                if (res.data.resultCode === 0) {
                    const {id, email, login} = res.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        return (
            <div>
                <Header {...this.props}/>
            </div>
        );
    }

};
const mapStateToProps = (state: StoreType) => ({
    authData: state.auth
});


export const HeaderMainContainer = connect(mapStateToProps, {setAuthUserData: setAuthUserDataAC})(HeaderContainer)