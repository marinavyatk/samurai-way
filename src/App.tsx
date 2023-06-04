import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import { OnOff } from './components/OnOff/OnOff';

function App() {
    console.log("App");
  return (
    <div className="App">
        <OnOff on={true}/>
        <OnOff on={false}/>
      <Rating rating={4}/>
     <Accordion title={"Hello"} collapsed={false}/>
     <Accordion title={"World"} collapsed={true}/>
     <Accordion title={"Let`s go!"} collapsed={false}/>
    </div>
  );
}

type RatingType = {
    rating: 0|1|2|3|4|5
}
function Rating(props: RatingType){
  console.log("Rating");
  return <div>
    <Star selected={props.rating>=1}/>
    <Star selected={props.rating>=2}/>
    <Star selected={props.rating>=3}/>
    <Star selected={props.rating>=4}/>
    <Star selected={props.rating ===5}/>
    </div>
}

type StarType ={
    selected: boolean
}
function Star(props: StarType){
if(props.selected){return  <span><b>star</b> </span>}
  return <span>star </span>;
}



export default App;
