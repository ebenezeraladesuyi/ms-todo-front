import React, { FC } from "react";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi"
import { AiOutlineStar, AiOutlinePlus, AiOutlineMenu } from "react-icons/ai"
import { ImCalendar, ImAttachment } from "react-icons/im"
import { MdOutlinePersonOutline, MdOutlineDoneOutline } from "react-icons/md"
import { CgHome } from "react-icons/cg";
import { BsCalendar2Plus } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsPersonPlus } from "react-icons/bs";
import Header from "../taskPage/header";
import { NavLink } from "react-router-dom";
import "./newSidebar.css"



interface props {
    children : any
}


const NewSideBar:FC<props> = ({children}) => {

    const menuItem = [
        {
            path: "/myday",
            name: "MyDay",
            icon: <WiDaySunny />
        },
        {
            path: "/important",
            name: "Important",
            icon: <AiOutlineStar />
        },
        {
            path: "/planned",
            name: "Planned",
            icon: <ImCalendar />
        },
        {
            path: "/assigned",
            name: "Assigned to me",
            icon: <MdOutlinePersonOutline />
        },
        {
            path: "/task",
            name: "Tasks",
            icon: <CgHome />
        },
    ]

    return(
        <>

        <Container2>

                <Head>
                   <Header />
               </Head>
        <Container>

            <Sidebar>

            <Mid>
                <TopSection>
                    <Logo>
                        <AiOutlineMenu />
                    </Logo>
                </TopSection>

                

                {
                    menuItem.map((item, index) => (
                        <NavLink to= {item.path} key={index} className="link" 
                        // activeclassName="active"
                        >
                            <Icon>{item.icon}</Icon>
                            <LinkText>{item.name}</LinkText>
                        </NavLink>
                    ))
                }

                </Mid>

                <Bottom>
                <Icon style={{marginLeft:"0px"}}>
                    <FiMail />
                </Icon>
                <Icon>
                    <ImCalendar />
                </Icon>
                <Icon>
                    <BsPersonPlus />
                </Icon>
                <Icon>
                    <ImAttachment />
                </Icon>
                <Icon>
                    <MdOutlineDoneOutline />
                </Icon>
            </Bottom>
                
            </Sidebar>

            </Container>

            <Main>{children}</Main>

            

            

        </Container2>

        </>
    )
}

export default NewSideBar;

const Bottom = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 12px;
`;

const Icon = styled.div`
font-size: 17px;
color: #5e2d28;
margin-left: 15px;
`;


// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

const Mid = styled.div``;

const Main = styled.div`
width: 100%;
padding: 20px;
`;

const LinkText = styled.div``;

// const Icon = styled.div``;

const Logo = styled.div`
margin-left: 17px;
font-size: 20px;
`;

const TopSection = styled.div`

`;

const Head = styled.div`
width: 100%;
height: 50px;
`;

const Sidebar = styled.div`
width: 250px;
height: 100%;
background-color: white;
box-shadow: 0 0 2px gray;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Container = styled.div`
width: 250px;
height: 100%;
background-color: white;
box-shadow: 0 0 2px gray;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

const Container2 = styled.div`
text-decoration: none;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
`;