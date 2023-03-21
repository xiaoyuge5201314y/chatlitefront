
import App from '../App'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import React from "react";
import Home from '../views/Home'

const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App></App>}>
                <Route path="/home" element={<Home/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default baseRouter();