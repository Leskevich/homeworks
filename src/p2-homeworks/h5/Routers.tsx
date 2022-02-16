import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Routers() {
    return (
        <div>
            <Routes>
                в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
                exact нужен чтоб указать полное совподение (что после '/' ничего не будет)
                <Route path={'/'} element={<PreJunior/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                // add routes

                у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
                <Route path={'/*'} element={<Error404/>}/>
                Switch выбирает первый подходящий роут
            </Routes>

        </div>
    )
}

export default Routers
