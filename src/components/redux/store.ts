import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./reducers/profile-reducer";
import {DialogsReducer} from "./reducers/dialogs-reducer";
import {SidebarReducer} from "./reducers/sidebar-reducer";
import {UserReducer} from "./reducers/user-reducer";
import {AuthReducer} from "./reducers/auth-reducer";


const reducers = combineReducers({
    profile: ProfileReducer,
    dialogs: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage: UserReducer,
    auth: AuthReducer
})
export let store = createStore(reducers);
export type StoreType = ReturnType<typeof reducers>
// window.store = store;//почему не работает?