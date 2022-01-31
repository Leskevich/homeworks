import React, {useState} from 'react'
import Affairs from './Affairs'


// types
export type AffairPriorityType = 'high' | 'low' | 'middle' // need to fix any
export type FilterType = 'all' | AffairPriorityType
export type AffairType = {
    id: number
    name: string
    priority: AffairPriorityType
} // need to fix any

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
]
// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === "all") {
        return affairs
    } else if (filter === 'high') {
        return affairs.filter(a => a.priority === 'high')
    } else if (filter === 'middle') {
        return affairs.filter(a => a.priority === 'middle')
    } else if (filter === 'low') {
        return affairs.filter(a => a.priority === 'low')
    } else {
        return affairs
    }
}
// need to fix

export const deleteAffair = (affairs: AffairType[], id: number): AffairType[] => { // need to fix any
    return affairs.filter(s=> s.id!==id) // need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (id: number) => setAffairs(deleteAffair(affairs, id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2