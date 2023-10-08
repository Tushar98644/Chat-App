'use client'
import { useEffect, useState } from "react";
import { ChatDiv, ChatWindow, ChatSearch, SearchDiv, DefaultScreen } from "./styled";
import io from 'socket.io-client';

export const Chat = () => {

    const socket = io('http://localhost:8000')
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    const sendChat = (e: any) => {
        e.preventDefault();
        socket.emit('chat', {
            message: message,
            id: socket.id
        });
        setMessage('');
        }

    useEffect(() => {
        socket.on('chat', (payload) => {
            setChat([...chat, payload]);
        });
    },[chat, socket]);
    
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
                <form action="submit" onSubmit={sendChat}>
                    <input type="text" className="bg-gray-400" name="" id="" value={message} onChange={(e)=>{
                        setMessage(e.target.value);
                    }}/>
                    <button type="submit">send</button>
                </form>
                <input type="text" value={chat[0]?.message} />
            </ChatWindow>
        </ChatDiv>
    );
}