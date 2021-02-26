import React from 'react';
import s from "./Button.module.css"

type BottomsType={
    title: string
    disabled: boolean
    execFunc: ()=> void
}

function Buttons(props: BottomsType) {

    return (
        <div className={s.one}>


            <button className={s.bottoms}
                    disabled={props.disabled}
                    onClick={()=>{props.execFunc()}}
            >
                {props.title}
            </button>

        </div>

    );
}

export default Buttons;
