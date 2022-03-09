import React from "react";
import { Routes, Route } from "react-router-dom";

import {Login} from "./pages/login/Index"

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}