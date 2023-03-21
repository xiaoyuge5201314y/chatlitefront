import React, {useState} from 'react'
import {Outlet, useRoutes} from "react-router-dom";
import routes from './router'

function App() {
    const element = useRoutes(routes)
    return (
        <div className="app">
            {element}
            <Outlet></Outlet>
        </div>
    )
}

export default App
