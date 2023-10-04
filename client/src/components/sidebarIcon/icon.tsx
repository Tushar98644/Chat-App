import styled from "styled-components";
import { IconProps ,sidebarProps} from "@/types/icon";

const Icon = styled.div<IconProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5vw;
    height: 4.5vw;
    border-radius: 1.4rem;
    background: ${props=>props.background || "#2070c6"};
    margin: 1.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow:  rgba(161, 192, 224, 0.7) 0px 0px 10px;
    &:hover {
        background-color: rgb(32, 112, 198);
        opacity: 0.8;
        color: #fff;
;
    }
    color: ${props=>props.color};
    svg{
        font-size: 1.9vw;
    }
`;

export const SidebarIcon = ({icon,background,color}:sidebarProps) => {
    return ( 
        <Icon background={background} color={color}>
            {icon}
        </Icon>
     );
}