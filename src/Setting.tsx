import React, {ChangeEvent, useState} from 'react';
import s from "./Setting.module.css"

type TotalT = {


    inc:(value: number)=>void
    count: number
    changeMinValue: number
    changeMaxValue: number
    maxValueFun: (maxValue: number)=>void
    minValueFun: (minValue: number)=>void
}

function Setting(props: TotalT) {


    const changeNumber = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (+e.currentTarget.value)
        props.maxValueFun(value)

    }
    const changeNumberStart = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.currentTarget.value)
        props.minValueFun(value)

    }




    return (<div className={s.total1}>
        <div className={s.click1}>
            <div className={s.one1}> Max Value <input type="number"
                                                      step={1}
                                                      value={props.changeMaxValue}
                                                      onChange={changeNumber}
            /></div>

            <div className={s.one1}> Start Value <input type="number"
                                                        step={1}
                                                        value={props.changeMinValue}
                                                        onChange={changeNumberStart}
            /></div>




        </div>
    </div>);
}

export default Setting;
