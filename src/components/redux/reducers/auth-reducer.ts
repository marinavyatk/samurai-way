const setUserData = 'SET-USER-DATA';


type setAuthUserDataAT = {
    type: 'SET-USER-DATA',
    data: {
        userId: number,
        email: string,
        login: string,
    }
}

export type AuthStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
type AuthReducerAT = setAuthUserDataAT

export const AuthReducer = (state: AuthStateType = initialState, action: AuthReducerAT) =>
{
    switch (action.type) {
        case setUserData: {
            return {...state, ...action.data, isAuth: true}
        }
        default:
            return state;
    }

}

export const setAuthUserDataAC = (userId: number, email: string, login: string) => ({
    type: setUserData,
    data: {
        userId,
        email,
        login,
    }
});