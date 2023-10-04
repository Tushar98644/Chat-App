'use client'
import { Layout } from "@/components";
import { SideBar, Chat, ChatList } from "@/components";
import { ContainerDiv } from "./styled";

const Home_page = () => {
  return (
    <Layout>
      <ContainerDiv>
        <SideBar />
        <Chat />
        <ChatList />
      </ContainerDiv>
    </Layout>
  );
}

export default Home_page;