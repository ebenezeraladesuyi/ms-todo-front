import React from "react";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi"
import { AiOutlineStar, AiOutlinePlus, AiOutlineMenu } from "react-icons/ai"
import { ImCalendar, ImAttachment } from "react-icons/im"
import { MdOutlinePersonOutline, MdOutlineDoneOutline } from "react-icons/md"
import { CgHome } from "react-icons/cg";
import { BsCalendar2Plus } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsPersonPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebar = () => {

    return (
        <>

        <Side>

            <Top>

                <Icon style={{marginBottom:"10px"}}>
                    <AiOutlineMenu />
                </Icon>

            <Link to="/task/myday">
                <Plan >
                    <Day>
                        <Icon>
                            <WiDaySunny />
                        </Icon>
                        <Task>My Day</Task>
                    </Day>

                    <Count>1</Count>
                </Plan>
            </Link>

                <Plan >
                    <Day>
                        <Icon>
                            <AiOutlineStar />
                        </Icon>
                        <Task>Important</Task>
                    </Day>

                    <Count>1</Count>
                </Plan>

                <Plan>
                    <Day>
                        <Icon>
                            <ImCalendar />
                        </Icon>
                        <Task>Planned</Task>
                    </Day>

                    <Count>1</Count>
                </Plan>

                <Plan>
                    <Day>
                        <Icon>
                            <MdOutlinePersonOutline />
                        </Icon>
                        <Task>Assigned to me</Task>
                    </Day>

                    <Count></Count>
                </Plan>

            <Link to="/task">
                <Plan>
                    <Day>
                        <Icon>
                            <CgHome />
                        </Icon>
                        <Task>Tasks</Task>
                    </Day>

                    <Count>3</Count>
                </Plan>
            </Link>

                <hr />

                <Plan style={{color:"blue"}}>
                    <Day>
                        <Icon style={{color:"blue"}}>
                            <AiOutlinePlus />
                        </Icon>
                        <Task>New List</Task>
                    </Day>

                    <Icon style={{marginRight:"15px", color:"blue"}}>
                        <BsCalendar2Plus />
                    </Icon>
                </Plan>

            </Top>

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

        </Side>


        </>
    )
}

export default Sidebar;

// const Top = styled.div``;

// const Top = styled.div``;

// const Top = styled.div``;

const Bottom = styled.div`
display: flex;
justify-content: space-around;
margin-bottom: 12px;
`;

const Count = styled.div`
margin-right: 15px;
font-size: 14px;
font-weight: 600;
`;

const Task = styled.div`
font-size: 14px;
font-weight: 600;
margin-left: 15px;
`;

const Day = styled.div`
display: flex;
margin-top: 10px;
margin-bottom: 10px;
`;

const Plan = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

:hover{
    background-color: #ebe4e4;
    cursor: pointer;
    transition: all 350ms;
}
`;

const Icon = styled.div`
font-size: 17px;
color: #5e2d28;
margin-left: 15px;
`;

const Top = styled.div`
margin-top: 25px;
`;

const Side = styled.div`
width: 250px;
height: 100%;
background-color: white;
box-shadow: 0 0 2px gray;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

