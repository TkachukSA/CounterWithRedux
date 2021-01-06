import React from 'react';

import s from "./App.module.css"

import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/store";
import {changeMaxValueAS, changeMinValueAS, incrementAS, resetAS, setAS, stateType} from "./Redux/app-redusers";
import Setting from "./Setting";
import CountPage from "./CountPage";
import Bottoms from "./bottom";


function App() {
    const {
        count,
        changeMaxValue,
        changeMinValue,
        error,
        incDisabled,
        resetDisabled,
        setSettingsButtonDisabled
    } = useSelector<AppRootStateType, stateType>(state => state.app)


    let dispatch = useDispatch()


    const inc = () => {
        let action = incrementAS()
        dispatch(action)
    }
    const maxValueFun = (value: number) => {
        let action = changeMaxValueAS(value)
        dispatch(action)
    }
    const minValueFun = (value: number) => {
        let action = changeMinValueAS(value)
        dispatch(action)
    }
    const reset = () => {
        let action = resetAS()
        dispatch(action)
    }

    const handleSet = () => {
        dispatch(setAS())
    }

    return <div className={s.container}>
        <div>changeMinValue : {changeMinValue}</div>
        <div>count: {count}</div>
        <div> changeMaxValue : {changeMaxValue}</div>

        <div className={s.window}>
            <CountPage counter={count}
                       error={error}
                       changeMinValue={changeMinValue}
                       changeMaxValue={changeMaxValue}/>
            <div className={s.click}>
                <Bottoms disabled={incDisabled} title={'inc'} execFunc={inc}/>
                <Bottoms disabled={resetDisabled} title={'reset'} execFunc={reset}/>
            </div>
        </div>


        <div className={s.window1}>
            <Setting count={count}
                     error={error}
                     changeMinValue={changeMinValue}
                     changeMaxValue={changeMaxValue}
                     maxValueFun={maxValueFun}
                     minValueFun={minValueFun}
            />

            <div>
                <Bottoms disabled={setSettingsButtonDisabled} title={'set'} execFunc={handleSet}/>
            </div>
        </div>

    </div>


}

export default App
