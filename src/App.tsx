import React from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Header} from "./components/Header/Header";
import {ProfileFirstContainer} from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';

import {Feed} from './components/Feed/Feed';
import {Friends} from './components/Friends/Friends';
import {Groups} from './components/Groups/Groups';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersFirstContainer} from "./components/Users/UsersContainer";
import {HeaderMainContainer} from "./components/Header/HeaderContainer";


function App() {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <HeaderMainContainer/>
                <Sidebar/>
                <div>
                    <Route path={'/profile/:userId?'} component={ProfileFirstContainer}/>
                    <Route path={'/dialogs'} component={DialogsContainer}/>
                    <Route path={'/feed'} component={Feed}/>
                    <Route path={'/friends'} component={Friends}/>
                    <Route path={'/groups'} component={Groups}/>
                    <Route path={'/users'} component={UsersFirstContainer}/>
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