import React from "react";
import styled from "styled-components";
import { MdOutlineApps } from "react-icons/md"
import { VscSearch } from "react-icons/vsc"
import { AiOutlineClose } from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { RxQuestionMark } from "react-icons/rx"
import { AiOutlineNotification } from "react-icons/ai"

const Header = () => {

    const [close, setClose] = React.useState(false)

    const newSearch = () => {
        setClose(!close)
    }

    return (
        <>

            <Head>

                <Left>
                    <Icon>
                        <MdOutlineApps />
                    </Icon>

                    <Do>To Do</Do>

                    <Srch>
                        <VscSearch />
                    </Srch>
                </Left>

                <Mid>

                    <Search>
                        <VscSearch />
                    </Search>

                    {/* { 
                    <SearchInput type="text" /> 
                    ? 
                    {close} 
                    : 
                    <Search>
                        <AiOutlineClose />
                    </Search> 
                    } */}

                    <SearchInput onClick={newSearch} type="text" />

                    { close ? 
                    <Search>
                        <AiOutlineClose />
                    </Search>
                    : null }

                </Mid>

                <Right>

                    <Set>
                        <FiSettings />
                    </Set>

                    <Set>
                        <RxQuestionMark />
                    </Set>

                    <Set>
                        <AiOutlineNotification />
                    </Set>

                    <AccName>EA</AccName>
                </Right>

            </Head>

        </>
    )
}

export default Header;

const Srch = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    width: 25px;
    height: 25px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
}
`;

const Set = styled.div`
margin-left: 25px;
color: white;
`;

const AccName = styled.div`
margin-bottom: 2px;
width: 25px;
height: 25px;
border: 1px solid white;
border-radius: 50%;
color: white;
margin-left: 13px;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
`;

const Right = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
`;

const SearchInput = styled.input`
width: 290px;
border: none;
outline: none;
`;

const Search = styled.div`
font-size: 14px;
`;

const Mid = styled.div`
width: 350px;
height: 30px;
background-color: white;
border-radius: 5px;
display: flex;
justify-content: space-between;
align-items: center;
padding-left: 7px;
padding-right: 7px;

@media screen and (max-width: 768px){
 display: none   
}
`;

const Icon = styled.div`
color: white;
font-size: 23px;
`;

const Do = styled.div`
font-size: 17px;
color: white;
font-weight: 600;
margin-left: 15px;
margin-bottom: 2px;
`;

const Left = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
`;

const Head = styled.div`
width: 100%;
height: 50px;
background-color: #2564cf;
display: flex;
justify-content: space-between;
align-items: center;
`;
