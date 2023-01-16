import React, { FC } from "react";
import styled from "styled-components";
import {BrowserRouter,
    Routes, Route} from 'react-router-dom';
import NewSideBar from './newSide';
import Tasks from "../taskPage/tasks";
import Important from "../taskPage/important";
import MyDay from "../taskPage/myDay";
import Assigned from "../taskPage/assigned";
import Planned from "../taskPage/planned";

interface props {
    children : any
}

const TaskRoutes:FC<props> = ({children}) => {

    


    return (
        <>
            <BrowserRouter>
                <NewSideBar>
                    <Routes>
                        <Route path="/task" element={<Tasks />}></Route>
                        <Route path="/important" element={<Important />}></Route>
                        <Route path="/assigned" element={<Assigned/>}></Route>
                        <Route path="/planned" element={<Planned />}></Route>
                        <Route path="/myday" element={<MyDay />}></Route>
                    </Routes>
                </NewSideBar>
            </BrowserRouter>

        </>
    )
}

export default TaskRoutes;