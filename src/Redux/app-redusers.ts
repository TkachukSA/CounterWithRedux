import {fchmod} from "fs";


export type setActionType ={
    type: 'SET'

}
export type incrementActionType = {
    type: 'INCREMENT'

}
export type resetActionType = {
    type: 'RESET'
}
export type changeMaxValueActionType = {
    type: 'MAX_NUMBER_VALUE'
    maxValue:number
}
export type changeMinValueActionType = {
    type: 'MIN_NUMBER_VALUE'
    minValue:number
}




   export type stateType={
       count: number

       changeMaxValue: number
       changeMinValue: number
       error: string
       incDisabled: boolean
       resetDisabled: boolean
       setSettingsButtonDisabled: boolean
    }


let initialState:stateType ={
    count:5,
    changeMaxValue: 10,
    changeMinValue: 3,
    error: "",
    incDisabled:false,
    resetDisabled:false,
    setSettingsButtonDisabled: false
}

type ActionsType = incrementActionType | resetActionType|setActionType|changeMaxValueActionType | changeMinValueActionType

export const CounterReducer = (state: stateType = initialState, action: ActionsType):stateType => {
    debugger
    switch (action.type) {
        case "INCREMENT":
            let copy ={...state}
            if(copy.count>=copy.changeMaxValue-1){
                copy.incDisabled=true
            }
           copy.count=copy.count+1
            return {...copy}

        case "MAX_NUMBER_VALUE":{
            let copy={...state}
            if(action.maxValue>=state.count){
                copy.changeMaxValue=action.maxValue
                copy.incDisabled=false
            }else {
                copy.incDisabled=true
            }

            return {...copy}
        }
        case "MIN_NUMBER_VALUE":{
            let copy={...state}
            if(action.minValue<0 || action.minValue>=state.changeMaxValue){
                alert('error')
            }
            copy.changeMinValue=action.minValue

            return {...copy}

        }

        case 'RESET':{
            return {...state, count: 0}
        }
        case "SET":{
            return {...state}
        }


        default:
            return state

    }
}
export const incrementAS=():incrementActionType=>({type: "INCREMENT"})
export const resetAS=():resetActionType=>({type: "RESET"})
export const setAS=():setActionType=>({type: "SET"})
export const changeMaxValueAS=(maxValue:number):changeMaxValueActionType=>({type: "MAX_NUMBER_VALUE", maxValue})
export const changeMinValueAS=(minValue:number):changeMinValueActionType=>({type: "MIN_NUMBER_VALUE", minValue})