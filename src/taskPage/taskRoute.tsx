import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Link, 
    Routes, Route} from 'react-router-dom'
import Tasks from "./tasks";
import Important from "./important";
import MyDay from "./myDay";


const TaskRoutes = () => {

    return (
        <>
            <Router>
                <Routes>
                <Route path="/tasks" element={<Tasks />}>
                    <Route path="important" element={<Important />} />
                    <Route path="myday" element={<MyDay />}/>
                </Route>
                </Routes>
            </Router>

        </>
    )
}

export default TaskRoutes;