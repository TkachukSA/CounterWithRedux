


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
    count:          Number(localStorage.count)? Number(localStorage.maxValue): 0,
    changeMaxValue: Number(localStorage.maxValue)? Number(localStorage.maxValue): 0,
    changeMinValue: Number(localStorage.minValue)? Number(localStorage.minValue): 0,
    error: "",
    incDisabled:true,
    resetDisabled:true,
    setSettingsButtonDisabled: false

}

type ActionsType = incrementActionType | resetActionType|setActionType|changeMaxValueActionType | changeMinValueActionType

export const CounterReducer = (state: stateType = initialState, action: ActionsType):stateType => {

    switch (action.type) {
        case "INCREMENT":
            let copy ={...state}
            if(copy.count>=copy.changeMaxValue-1){
                copy.incDisabled=true
            }
           copy.setSettingsButtonDisabled=true
            copy.resetDisabled=false
            copy.count=copy.count+1
            return {...copy}

        case "MAX_NUMBER_VALUE":{
            let copy={...state}
            if(action.maxValue > state.changeMinValue){  //this old value state.count
                copy.changeMaxValue=action.maxValue
                copy.setSettingsButtonDisabled=false
                copy.error='Enter values and press SET'
                copy.incDisabled=true
                copy.resetDisabled=true
            }if (action.maxValue <= state.changeMinValue || state.changeMinValue<0){
                copy.changeMaxValue=action.maxValue
                copy.setSettingsButtonDisabled=true
                copy.error='Incorrect Value!'
                copy.incDisabled=true
                copy.resetDisabled=true

            } else {
                copy.incDisabled=true
                copy.resetDisabled=true
            }

            return {...copy}
        }
        case "MIN_NUMBER_VALUE":{
            let copy={...state}
            if (action.minValue<=0 || action.minValue> state.changeMaxValue){
                copy.error='Incorrect Value!'
                copy.setSettingsButtonDisabled=true
                copy.incDisabled=true
                copy.resetDisabled=true
                copy.changeMinValue=action.minValue
            }else {
                copy.setSettingsButtonDisabled = false
                copy.setSettingsButtonDisabled=false
                copy.error = 'Enter values and press SET'
                copy.incDisabled = true
                copy.resetDisabled = true
                copy.changeMinValue = action.minValue
            }


            return copy

        }

        case 'RESET':{
            //{state.incDisabled=false}
            return {...state, count: state.changeMinValue, incDisabled: false }
        }
        case "SET":{

            localStorage.setItem('minValue', state.changeMinValue.toString())
            localStorage.setItem('maxValue', state.changeMaxValue.toString())
            localStorage.setItem('count', state.count.toString())

            return {...state,
            count: state.changeMinValue,
                setSettingsButtonDisabled: true,
                incDisabled:false,
                resetDisabled:false,
                error:'',

            }
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