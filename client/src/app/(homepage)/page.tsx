'use client'
import { SideBar, Chat, ChatList } from "@/components";
import { ContainerDiv } from "./styled";

const Home_page = () => {
  return (
      <ContainerDiv>
        <SideBar />
        <Chat />
        <ChatList />
      </ContainerDiv>
  );
}

export default Home_page;