import React from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import { BrowserRouter, Route, Router } from 'react-router-dom';

import { Feed } from './components/Feed/Feed';
import { Friends } from './components/Friends/Friends';
import { Groups } from './components/Groups/Groups';
import Dialogs from "./components/Dialogs/Dialogs";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";


function App() {
    return (
    <div className={'App'}>
        <BrowserRouter>
            <Header/>
            <Sidebar/>
            <div>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={DialogsContainer}/>
                <Route path={'/feed'} component={Feed}/>
                <Route path={'/friends'} component={Friends}/>
                <Route path={'/groups'} component={Groups}/>
                <Route path={'/users'} component={UsersContainer}/>
            </div>
        </BrowserRouter>
    </div>)
}
export default App;


// const GridContainer = styled.div`
// display: grid;
//   grid-template-areas: "header header"
// "sidebar content";
// `