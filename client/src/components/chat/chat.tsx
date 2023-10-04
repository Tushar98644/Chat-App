'use client'
import { ChatDiv, ChatWindow, ChatSearch, SearchDiv } from "./styled";

export const Chat = () => {
    return (
        <ChatDiv>
            <SearchDiv>
                <ChatSearch placeholder={'search'}>
                </ChatSearch>
            </SearchDiv>
            <ChatWindow>
            </ChatWindow>
        </ChatDiv>
    );
}