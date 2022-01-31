import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    id:number
    affair: string // need to fix any
    deleteAffairCallback:(id: number)=>void
    priority:string// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.id)}// need to fix

    return (
        <div>

            {props.affair} {props.priority}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair