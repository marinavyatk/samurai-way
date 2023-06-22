import React from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
// import styled from "styled-components";
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Feed } from './components/Feed/Feed';
import { Friends } from './components/Friends/Friends';
import { Groups } from './components/Groups/Groups';


function App() {
    return (
    <div className={'App'}>
        <BrowserRouter>
            <Header/>
            <Sidebar/>
            <div>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/feed'} component={Feed}/>
                <Route path={'/friends'} component={Friends}/>
                <Route path={'/groups'} component={Groups}/>
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