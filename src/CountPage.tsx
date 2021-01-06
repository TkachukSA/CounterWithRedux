import s from "./CountPage.module.css"

type TotalT = {
    counter: number
    changeMinValue: number
    changeMaxValue: number
    error: string
}

function CountPage(props: TotalT) {


    return (<div className={s.total}>

        {
            props.error
                ? <h3 className={props.error === 'Incorrect Value!'
                ? s.red
                : s.yellow}>
                    {props.error}
                </h3>
                : <h2 className={props.counter === props.changeMaxValue ? s.red : s.yellow}>{props.counter}</h2>
        }

    </div>);
}

export default CountPage;
