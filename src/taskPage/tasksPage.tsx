import React from "react";
import styled from "styled-components";
import Header from "./header";
import Sidebar from "./sidebar";
import Tasks from "./tasks";


const TaskPage = () => {

    return (
        <>

            <Holder>

               <Head>
                   <Header />
               </Head>

                <Body>
                    <SideBarr>
                        <Sidebar />
                    </SideBarr>

                    <TaskBody>
                        <Tasks />
                    </TaskBody>
                </Body>

            </Holder>

        </>
    )
}

export default TaskPage;

// const Head = styled.div``;

// const Head = styled.div``;

// const Right = styled.div``;

// const Head = styled.div``;

const TaskBody = styled.div`
width: calc(100% - 250px);
height: 100%;
`;

const SideBarr = styled.div`
width: 250px;
height: 100%;
background-color: white;
box-shadow: 0 0 2px gray;
`;

const Body = styled.div`
width: 100%;
height: calc(100vh - 50px);
display: flex;
`;

const Head = styled.div`
width: 100%;
height: 50px;
`;

const Holder = styled.div`
width: 100%;
height: 100vh;
background-color: #faf9f8;
`;