import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar.js";
import LogoDash from "../../assets/logos/LogoDash.png"
import MyGames from "../../assets/logos/MyGames.png"
import Profile1 from "../../assets/profilePictures/Profile1.png"

function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <>
            <HeaderContainer>
                <MyContent onClick={toggleSidebar}>
                    <img src={MyGames} alt="placeholder" />
                    <h1>Menu</h1>
                </MyContent>
                <Logo>
                    <Link to={"/"}>
                        <img src={LogoDash} alt="placeholder" />
                    </Link>
                    <h1>Dash</h1>
                </Logo>
                <UserProfile>
                    <UserName>
                        <h1>Username</h1>
                        <p>Subscribed</p>
                    </UserName>
                    <img src={Profile1} alt="placeholder" />
                </UserProfile>
            </HeaderContainer>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    );
}

export default Header;

const HeaderContainer = styled.header`
    background-color: #0a101f;
    color: #fff;
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 10px;
`;

const MyContent = styled.div`
    background-color: #0a101f;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    & img {
        width: 15%;
    }
    & h1 {
        font-size: 2rem;
        margin-left: 15px;
    }
`;


const Logo = styled.div`
    background-color: #0a101f;
    color: #fff;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
        width: 150px;
        height: 150px;
    }
    & h1 {
        font-size: 2rem;
        margin-left: 0;
    }
`;

const UserProfile = styled.div`
    background-color: #0a101f;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 25%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    & img {
        width: 20%;
    }
    & h1 {
        font-size: 2rem;
    }
    & p {
        font-size: 1rem;
        color: #F0F757;
    }
    
`;

const UserName = styled.div`
    background-color: #0a101f;
    color: #fff;
    text-align: right;
    padding: 10px;
    & h1 {
        font-size: 2rem;
        margin-bottom: 0;
    }
    & p {
        margin-top: 0;
        font-size: 1.5rem;
    }
`;