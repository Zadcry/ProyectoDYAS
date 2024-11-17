import React from "react";
import styled from "styled-components";
import LargeBanner from "../components/home/LargeBanner";
import SmallBanner from "../components/home/SmallBanner";
import MediumBanner from "../components/home/MediumBanner";

import LargeBanner1 from "../assets/banners/LargeBanner1.png";
import LargeBanner2 from "../assets/banners/LargeBanner2.png";
import SmallBanner1 from "../assets/banners/SmallBanner1.png";
import MediumBanner1 from "../assets/banners/MediumBanner1.png";
import ArrowRight from "../assets/logos/ArrowRight.png";


function Home(){
    return(
        <HomeContainer>
            <Trending>
                <h1>Trending</h1>
                <hr/>
                <TrendingContent>
                    <LargeBanner image={LargeBanner1} text="Stranger Things" url="/DetailedShow"/>
                    <LargeBanner image={LargeBanner2} text="Breaking Bad" url="/"/>
                    <img src={ArrowRight} alt=""/>
                </TrendingContent>
            </Trending>
            <Latest>
                <h1>Latest</h1>
                <hr/>
                <LatestContent>
                    <SmallBanner image={SmallBanner1} text="The Mandalorian" url="/"/>
                    <SmallBanner image={SmallBanner1} text="The Mandalorian" url="/"/>
                    <SmallBanner image={SmallBanner1} text="The Mandalorian" url="/"/>
                    <SmallBanner image={SmallBanner1} text="The Mandalorian" url="/"/>
                    <SmallBanner image={SmallBanner1} text="The Mandalorian" url="/"/>
                    <SmallBanner image={SmallBanner1} text="The Mandalorian" url="/"/>
                    <SmallBanner image={SmallBanner1} text="The Mandalorian" url="/"/>
                    <img src={ArrowRight} alt=""/>
                </LatestContent>
            </Latest>
            <Categories>
                <h1>Categories</h1>
                <hr/>
                <CategoriesContent>
                    <MediumBanner image={MediumBanner1} text="Action" url="/"/>
                    <MediumBanner image={MediumBanner1} text="Action" url="/"/>
                    <MediumBanner image={MediumBanner1} text="Action" url="/"/>
                    <MediumBanner image={MediumBanner1} text="Action" url="/"/>
                    <img src={ArrowRight} alt=""/>
                </CategoriesContent>
            </Categories>
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
    background-color: #0e1428;
    color : white;
    padding: 20px;
    text-align: center;
    height: 200vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Trending = styled.div`
    background-color: #0e1428;
    color: #fff;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 10px;
    & h1 {
        font-size: 2rem;
        align-self: flex-start;
        margin-bottom: 5px;
    }
    & hr {
        border: 2px solid #058ED9;
        width: 100%;
        margin-bottom: 20px;
    }
`;

const TrendingContent = styled.div`
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    height: 40vh;
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    & img {
        margin-right: 20px;
    }
`;

const Latest = styled.div`
    background-color: #0e1428;
    color: #fff;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 10px;
    & h1 {
        font-size: 2rem;
        align-self: flex-start;
        margin-bottom: 5px;
    }
    & hr {
        border: 2px solid #058ED9;
        width: 100%;
        margin-bottom: 20px;
    }
`;

const LatestContent = styled.div`
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    height: 35vh;
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    & img {
        margin-right: 20px;
    }
`;

const Categories = styled.div`
    background-color: #0e1428;
    color: #fff;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 10px;
    & h1 {
        font-size: 2rem;
        align-self: flex-start;
        margin-bottom: 5px;
    }
    & hr {
        border: 2px solid #058ED9;
        width: 100%;
        margin-bottom: 20px;
    }
`;

const CategoriesContent = styled.div`
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    height: 30vh;
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 10px;
    border-radius: 20px;
    & img {
        margin-right: 20px;
    }
`;