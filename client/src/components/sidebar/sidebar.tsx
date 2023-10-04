'use client'
import { MainDiv } from "./styled";
import { GiExitDoor } from "react-icons/gi"
import { AiFillHome } from "react-icons/ai"
import { SidebarIcon } from "@/components/sidebarIcon/icon";

export const SideBar = () => {
    return (
        <MainDiv>
            <SidebarIcon color="#fff" icon={<AiFillHome />} />
            <SidebarIcon background="#373737" icon={<GiExitDoor />}/>
        </MainDiv>

    );
}