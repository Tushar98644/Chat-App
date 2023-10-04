'use client'
import { ChatDiv, ChatWindow, ChatSearch, SearchDiv, DefaultScreen } from "./styled";

export const Chat = () => {
    return (
        <ChatDiv>
            <SearchDiv>
                <ChatSearch placeholder={'search'}>
                </ChatSearch>
            </SearchDiv>
            <ChatWindow>
                <DefaultScreen>
                    <p>Come join the fun!</p>
                    <p>Chat with friends or meet new ones in one of our lively chat rooms.</p>
                        <p>See you there! 🙋🏽‍♂️</p>
                </DefaultScreen>
            </ChatWindow>
        </ChatDiv>
    );
}