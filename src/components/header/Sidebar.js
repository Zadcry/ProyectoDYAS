import React from "react";
import styled from "styled-components";

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <SidebarContainer isOpen={isOpen}>
            <CloseButton onClick={toggleSidebar}>×</CloseButton>
            <MenuOption>Subscription</MenuOption>
            <MenuOption>Profile</MenuOption>
            <MenuOption>Ratings</MenuOption>
            <MenuOption>Activity</MenuOption>
            <MenuOption>Saves</MenuOption>
            <MenuOption>Settings</MenuOption>
        </SidebarContainer>
    );
}

export default Sidebar;

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-300px")};
    width: 300px;
    height: 100vh;
    background-color: #0a101f;
    color: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    padding: 20px;
    transition: left 0.3s ease;
    z-index: 1000;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    align-self: flex-end;
    cursor: pointer;
`;

const MenuOption = styled.div`
    font-size: 1.5rem;
    margin: 20px 0;
    cursor: pointer;
    &:hover {
        color: #f0f757;
    }
`;
