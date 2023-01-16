import React from "react";
import styled from "styled-components";
import { WiDaySunny } from "react-icons/wi"
import { AiOutlineEllipsis } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi"
import { BsLightbulb, BsCircle } from "react-icons/bs"
import { MdOutlineNotificationsNone } from "react-icons/md";
import { TbRepeat } from "react-icons/tb";
import { ImCalendar } from "react-icons/im"



const Tasks = () => {

    return (
        <>

            <Day>

                <DayHold>

                    <Head>
                        <HeadLeft>
                            <My>
                                <WiDaySunny />
                                <Word>My Day</Word>
                                <AiOutlineEllipsis />
                            </My>
                            <Word2>Monday, January 16</Word2>
                        </HeadLeft>

                        <HeadRight>
                            <Sort>
                                <BiSortAlt2 />
                                <SortWord>Sort</SortWord>
                            </Sort>

                            <Sort>
                                <BsLightbulb/>
                                <SortWord>Suggestions</SortWord>
                            </Sort>
                        </HeadRight>
                    </Head>

                    <Add>
                        <Add1>
                            <Add2>
                                <BsCircle />
                                <AddWord>Add a task</AddWord>
                            </Add2>
                        </Add1>

                        <Alarm>
                            <Alarm1>
                                <ImCalendar />
                                <MdOutlineNotificationsNone />
                                <TbRepeat />
                            </Alarm1>

                            <Alarm2>Add</Alarm2>
                        </Alarm>
                    </Add>

                </DayHold>

            </Day>

        </>
    )
}

export default Tasks;

// const Day = styled.div``;

// const Day = styled.div``;

// const Day = styled.div``;

const Alarm2 = styled.button`
width: 50px;
height: 26px;
font-size: 12px;
background-color: white;
border: none;
color:#6c332f88;
margin-right: 15px;
`;

const Alarm1 = styled.div`
margin-left: 15px;
width: 85px;
display: flex;
justify-content: space-between;
color: #6c332f;
`;

const Alarm = styled.div`
box-shadow: 0 0 1.5px gray;
background-color: #f4f1ed;
height: 40px;
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 0 0 5px 5px;
`;

const AddWord = styled.div`
font-size: 13px;
color: blue;
margin-left: 12px;
`;

const Add2 = styled.div`
display: flex;
margin-left: 15px;
`;

const Add1 = styled.div`
box-shadow: 0 0 1.5px gray;
background-color: white;
height: 40px;
display: flex;
align-items: center;
border-radius: 5px 5px 0 0;
`;

const Add = styled.div``;

const SortWord = styled.div`
font-size: 14px;
font-weight: 600;
`;

const Sort = styled.div`
display: flex;
align-items: center;
margin-left: 15px;
color:#6c332f88;
`;

const HeadRight = styled.div`
display: flex;
`;

const Word2 = styled.div`
font-size: 12px;
color: #6c332f;
`;

const Word = styled.div`
font-weight: 600;
margin-right: 8px;
margin-left: 8px;
font-size: 17px;
color: #6c332f;
`;

const My = styled.div`
display: flex;
align-items: center;
`;

const HeadLeft = styled.div`
`;

const Head = styled.div`
width: 100%;
height: 75px;
display: flex;
justify-content: space-between;
align-items: center;
`;

const DayHold = styled.div`
width: 1050px;
height: 100%;
display: flex;
flex-direction: column;
`;

const Day = styled.div`
background-color: #faf9f8;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
`;

