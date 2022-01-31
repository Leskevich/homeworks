import React from 'react'
import s from './Affairs.module.css'

type AffairPropsType = {
    id:number
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.id)}// need to fix

    return (
        <div className={s.affair}>
            <div>{props.affair}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
