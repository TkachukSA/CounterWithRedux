import React from 'react';
import s from "./App.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/store";
import {changeMaxValueAS, changeMinValueAS, incrementAS, resetAS, setAS, stateType} from "./Redux/app-redusers";
import Setting from "./Setting";
import CountPage from "./CountPage";
import Buttons from "./Button";



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
        dispatch(incrementAS())
    }
    const maxValueFun = (value: number) => {
        dispatch(changeMaxValueAS(value))
    }
    const minValueFun = (value: number) => {
        dispatch(changeMinValueAS(value))
    }
    const reset = () => {
        dispatch(resetAS())
    }

    const handleSet = () => {
        dispatch(setAS())
    }

    return <div className={s.container}>

        <div className={s.window}>
            <CountPage counter={count}
                       error={error}
                       changeMinValue={changeMinValue}
                       changeMaxValue={changeMaxValue}/>
            <div className={s.click}>
                <Buttons disabled={incDisabled} title={'inc'} execFunc={inc}/>
                <Buttons disabled={resetDisabled} title={'reset'} execFunc={reset}/>
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
                <Buttons disabled={setSettingsButtonDisabled} title={'set'} execFunc={handleSet}/>
            </div>
        </div>

    </div>


}

export default App
