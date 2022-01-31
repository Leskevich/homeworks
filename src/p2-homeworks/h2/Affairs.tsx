import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data:Array<AffairType>
    setFilter: (s:FilterType)=>void
    deleteAffairCallback: (_id:number)=>void
}

function Affairs({data,setFilter,deleteAffairCallback}: AffairsPropsType) {
    const mappedAffairs = data.map((a: AffairType) => (
        <Affair // should work
            id={a._id}
            key={a._id}// кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a.name}
            deleteAffairCallback={deleteAffairCallback}
        />
    ))

    const setAll = () => {setFilter('all')} // need to fix
    const setHigh = () => {setFilter('high')}
    const setMiddle = () => {setFilter('middle')}
    const setLow = () => {setFilter('low')}

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
