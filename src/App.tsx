import React from 'react';
import './App.css';
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import styled from "styled-components";


function App() {
    return (<div className={'App'}>
        <Header/>
        <Sidebar/>
        <Content/>
    </div>)
}
export default App;


// const GridContainer = styled.div`
// display: grid;
//   grid-template-areas: "header header"
// "sidebar content";
// `