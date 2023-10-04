'use client'
import { MainDiv } from "./styled";
import { GiExitDoor } from "react-icons/gi"
import { AiFillHome, AiFillWechat } from "react-icons/ai"
import { SidebarIcon } from "@/components/sidebarIcon/icon";

export const SideBar = () => {
    return (
        <MainDiv>
            {/* <SidebarIcon icon={<AiFillWechat />} /> */}
            <SidebarIcon icon={<AiFillHome />} />
            <SidebarIcon background="#373737" icon={<GiExitDoor />}/>
        </MainDiv>

    );
}