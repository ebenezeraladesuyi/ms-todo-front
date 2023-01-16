import React from "react";
import { useRoutes } from "react-router-dom"
import NewSideBar from "../newsidebar/newSide";
import SignIn from '../sign/signIn';
import SignUp from "../sign/signUp";
import Important from "../taskPage/important";
import MyDay from "../taskPage/myDay";
import Tasks from "../taskPage/tasks";
import TaskPage from "../taskPage/tasksPage";

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/",
            element: <SignIn />
        },
        {
            path: "/signup",
            element: <SignUp />
        },
        {
            path: "/tasks",
            element: <TaskPage />
        },
        {
            path: "/task",
            element: <Tasks />,

            children: [
                {
                    path: "myday",
                    element: <MyDay />
                },
                {
                    path: "important",
                    element: <Important />
                }
            ]
        },
        {
            path: "sidebar",
            element: <NewSideBar children={""}/> 
        }
    ]);

    return element

}

export default AllRoutes