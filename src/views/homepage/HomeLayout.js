import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Title } from './index';
import { useSpring, animated } from '@react-spring/web';
import { MenuBox } from './MenuBox';
import GlobalStyle from './GlobalStyle';
import { Cursor } from './cursor';
// import Chatbot from "react-chatbot-kit";
import '../../components/chatbot/chatbot.css';
// import { ActionProvider, MessageParser, config } from '../../components/chatbot';
import Img1Webp from './img/1.webp';
import Img2Webp from './img/2.webp';
import Img3Webp from './img/3.webp';

const Layout = styled.div`
    display: flex;
    background: white;
`;

const ChatBotDiv = styled(animated.div)`
    position: absolute;
    bottom: 10vh;
    right: 3vw;
    width: 25vw;
    height: 70vh;
    z-index: 7;

    & embed {
        width: 100%;
        height: 100%;
    }
`

const menuTitle = ['상품/서비스', '산업','About KT'];

export const ToggleChatbotButton = ({ onClick }) => {
    return (
        <button className="appChatbotButton_1LU6" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="appChatbotButtonIcon_Lq7z">
            <path d="M192 408h64v-48h-64zm384-216h-32a96 96 0 00-96-96H344V24a24 24 0 00-48 0v72H192a96 96 0 00-96 96H64a48 48 0 00-48 48v128a48 48 0 0048 48h32a96 96 0 0096 96h256a96 96 0 0096-96h32a48 48 0 0048-48V240a48 48 0 00-48-48zM96 368H64V240h32zm400 48a48.14 48.14 0 01-48 48H192a48.14 48.14 0 01-48-48V192a48 48 0 0148-48h256a48 48 0 0148 48zm80-48h-32V240h32zM240 208a48 48 0 1048 48 47.996 47.996 0 00-48-48zm160 0a48 48 0 1048 48 47.996 47.996 0 00-48-48zm-16 200h64v-48h-64zm-96 0h64v-48h-64z"></path>
            </svg>
        </button>
    );
}

export function HomeLayout() {

    const [isOpen, setIsOpen] = useState({
        left: false, 
        middle: false,
        right: false
    });

    const [isChatOpen, setIsChatOpen] = useState(false);

    const chatStyle = useSpring({
        opacity: isChatOpen ? 1 : 0,
        // marginLeft: isChatOpen ? 0 : 1500,
        // zIndex: isChatOpen ?  1 : -1
        pointerEvents: isChatOpen ? 'auto' : 'none'
    })

    const { left, middle, right } = isOpen;

    return (
        <>
            <Layout>
                <GlobalStyle />
                <Cursor />
                <ChatBotDiv style={chatStyle}>
                    {/* <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                        placeholderText='궁금한 점을 입력해주세요!'
                    /> */}
                        <embed type="video/webm"
                        src="https://ibot.kt.com/client/chat.html?channelToken=b6841d2830b64f328fdc61c387b7021c" >
                        </embed>
                </ChatBotDiv>
                <ToggleChatbotButton onClick={()=>{setIsChatOpen(!isChatOpen)}}/>
                <Title show={[left,middle,right].some((item)=>item)}/>
                {   
                    left === false && 
                    middle === false && 
                    right === false ? 
                    <>
                        <Box backgroundImg={Img1Webp} show={true} all={true} name={"left"}>
                            <Button
                                onClick={()=>setIsOpen({
                                    left: !left,
                                    middle: false,
                                    right: false
                                })}
                                isKR={true}
                            >{menuTitle[0]}</Button>
                            <MenuBox show={left} menu={menuTitle[0]}></MenuBox>
                        </Box>
                        <Box backgroundImg={Img2Webp} show={true} all={true} name={"middle"}>
                            <Button
                                onClick={()=>setIsOpen({
                                    left: false,
                                    middle: !middle,
                                    right: false
                                })}
                                isKR={true}
                            >{menuTitle[1]}</Button>
                            <MenuBox show={middle} menu={menuTitle[1]} index={1}></MenuBox>
                        </Box>
                        <Box backgroundImg={Img3Webp} show={true} all={true} name={"right"}>
                            <Button
                                onClick={()=>setIsOpen({
                                    left: false,
                                    middle: false,
                                    right: !right
                                })}
                                isKR={false}
                            >{menuTitle[2]}</Button>
                            <MenuBox show={right} menu={menuTitle[2]} index={2}></MenuBox>
                        </Box>
                    </>
                    :
                    <>
                        <Box backgroundImg={Img1Webp} show={left} all={false} name={"left"}>
                            <Button
                                onClick={()=>setIsOpen({
                                    left: !left,
                                    middle: false,
                                    right: false
                                })}
                                isKR={true}
                            >{menuTitle[0]}</Button>
                            <MenuBox show={left} menu={menuTitle[0]}></MenuBox>
                        </Box>
                        <Box backgroundImg={Img2Webp} show={middle} all={false} name={"middle"}>
                            <Button
                                onClick={()=>setIsOpen({
                                    left: false,
                                    middle: !middle,
                                    right: false
                                })}
                                isKR={true}
                            >{menuTitle[1]}</Button>
                            <MenuBox show={middle} menu={menuTitle[1]} index={1}></MenuBox>
                        </Box>
                        <Box backgroundImg={Img3Webp} show={right} all={false} name={"right"}>
                            <Button
                                onClick={()=>setIsOpen({
                                    left: false,
                                    middle: false,
                                    right: !right
                                })}
                                isKR={false}
                            >{menuTitle[2]}</Button>
                            <MenuBox show={right} menu={menuTitle[2]} index={2}></MenuBox>
                        </Box>
                    </>
                }
                </Layout>
               
        </>
    )

} 