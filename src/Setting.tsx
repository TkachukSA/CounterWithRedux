import React, {ChangeEvent, useState} from 'react';
import s from "./Setting.module.css"

type TotalT = {
    error: string
    count: number
    changeMinValue: number
    changeMaxValue: number
    maxValueFun: (maxValue: number) => void
    minValueFun: (minValue: number) => void
}

function Setting(props: TotalT) {


    const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.valueAsNumber
        props.maxValueFun(value)

    }
    const changeNumberStart = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        props.minValueFun(value)
    }


//const classNamev= props.error === 'Incorrect Value!'? s.inputRed : s.input

    return (<div className={s.total1}>
        <div className={s.click1}>
            <div className={s.one1}>max value
                <input type="number"
                       className={props.error === 'Incorrect Value!' ? s.inputRed : s.input}
                       step={1}
                       value={props.changeMaxValue}
                       onChange={changeNumber}
                />
            </div>

            <div className={s.one1}>min value <input type="number"
                                                     className={props.error === 'Incorrect Value!' ? s.inputRed : s.input}
                                                     step={1}
                                                     value={props.changeMinValue}
                                                     onChange={changeNumberStart}

            /></div>


        </div>
    </div>);
}

export default Setting;
