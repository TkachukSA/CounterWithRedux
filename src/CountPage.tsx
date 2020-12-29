
import s from "./CountPage.module.css"

type TotalT={
    counter: number
    changeMinValue: number
    changeMaxValue: number
    error: string
}

function CountPage(props: TotalT) {

   /* let totlnumbers= props.error? "error": props.counter
    let errorColor = props.counter >= props.maxNum || props.counter < 0 || props.maxNum <0? s.red: s.yellow
*/

    return (<div className={s.total}>

        {props.error ? <h3 className={props.error === 'Incorrect Value!' ? s.red : s.yellow}>{props.error}</h3> :
            <h3 className={props.counter === props.changeMinValue ? s.red : s.yellow}>{props.counter}</h3>}

    </div> );
}

export default CountPage;
