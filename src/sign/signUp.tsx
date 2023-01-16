import React from "react";
import styled from "styled-components"

const SignUp = () => {


    return (

        <>

            <Hold>
                <Card>
                    <Top>
                    <TopHold>
                        <Micro>
                            <MicroLogo src="/images/msLogo.svg" />
                        </Micro>

                        <Sign>Sign Up</Sign>

                        <MicroInput type="text" placeholder="Name" />

                        <MicroInput type="text" placeholder="Email" />

                        <MicroInput type="password" placeholder="Password" />

                        <Create>Have an Account? <span style={{color:"blue"}}>Sign in!</span></Create>

                        <Access>Can't access your account?</Access>

                        {/* <Buttons>
                            <Back>Back</Back>
                            <Next>Next</Next>
                        </Buttons> */}
                    </TopHold>
                    </Top>

                </Card>
            </Hold>

        </> 

    )
}

export default SignUp

// const Top = styled.div``;

const TopHold = styled.div`
width: 260px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const Option = styled.div``;

const KeyLogo = styled.img``;

const Key = styled.div``;

const Bottom = styled.div`
width: 280px;
height: 30px;
background-color: white;
box-shadow: 0 0 3px gray;
display: flex;
justify-content: space-around;
`;

const Next = styled.button`
width: 75px;
height: 26px;
background-color: #0067b8;
border: none;
color: white;
font-size: 12px;
font-weight: 600;
`;

const Back = styled.button`
width: 75px;
height: 26px;
margin-right: 6px;
background-color: #cccccc;
border: none;
font-size: 12px;
font-weight: 600;
`;

const Buttons = styled.div`
margin-bottom: 15px;
display: flex;
justify-content: flex-end;
`;

const Access = styled.div`
font-size: 11px;
font-weight: 600;
color: blue;
margin-bottom: 15px;
`;

const Create = styled.div`
font-size: 11px;
font-weight: 600;
`;

const MicroInput = styled.input`
border: none;
border-bottom: 1px solid gray;
height: 30px;
`;

const Sign = styled.div`
font-size: 20px;
font-weight: 600;
`;

const MicroWord = styled.div`
color: #838383;
`;

const MicroLogo = styled.img`
height: 20px;
margin-top: 15px;
`;

const Micro = styled.div`
display: flex;
`;

const Top = styled.div`
width: 310px;
height: 320px;
background-color: white;
box-shadow: 0 0 3px gray;
display: flex;
justify-content: center;
align-items: center;
`;

const Hold = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #d6e1d2;
`;

const Card = styled.div`
width: 310px;
height: 330px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;


