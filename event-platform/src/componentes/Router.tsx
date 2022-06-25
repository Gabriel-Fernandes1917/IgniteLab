import { Route, Routes } from "react-router-dom";
import {Event} from '../pages/Event'

export function Router(){

    return(
        <Routes>
            <Route path="/"  element={<h1>oi home</h1>}/>
            <Route path="/evento"  element={<Event />}/>
            <Route path="/evento/lesson/:slug"  element={<Event />}/>
        </Routes>
    )
}