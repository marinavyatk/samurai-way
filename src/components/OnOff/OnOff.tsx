import {findAllByDisplayValue} from "@testing-library/react";
import s from './OnOffStyle.module.css';
type OnOff = {
    on: boolean
}
export const OnOff = (props: OnOff)=>{
    if(props.on){
        return <div className={s.switcher}>

            <div className={s.square1}>On</div>
            <div className={s.squareNeutral}>Off</div>
            <div className={s.bulb1}></div>

        </div>
    }
return <div className={s.switcher}>

    <div className={s.squareNeutral}>On</div>
    <div className={s.square2}>Off</div>
    <div className={s.bulb2}></div>

</div>
}