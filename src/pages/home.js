import React from "react";
import styled from "styled-components";
import LargeBanner from "../components/home/LargeBanner";
import SmallBanner from "../components/home/SmallBanner";
import MediumBanner from "../components/home/MediumBanner";

import BgHome from "../assets/backgrounds/BgHome.png";

import LargeBanner1 from "../assets/banners/LargeBanner1.png";
import LargeBanner2 from "../assets/banners/LargeBanner2.png";

import SmallBanner1 from "../assets/banners/SmallBanner1.png";
import SmallBanner2 from "../assets/banners/SmallBanner2.png";
import SmallBanner3 from "../assets/banners/SmallBanner3.png";
import SmallBanner4 from "../assets/banners/SmallBanner4.png";
import SmallBanner5 from "../assets/banners/SmallBanner5.png";
import SmallBanner6 from "../assets/banners/SmallBanner6.png";
import SmallBanner7 from "../assets/banners/SmallBanner7.png";

import MediumBanner1 from "../assets/banners/MediumBanner1.png";
import MediumBanner2 from "../assets/banners/MediumBanner2.png";
import MediumBanner3 from "../assets/banners/MediumBanner3.png";
import MediumBanner4 from "../assets/banners/MediumBanner4.png";

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
                    <SmallBanner image={SmallBanner1} text="The Office" url="/"/>
                    <SmallBanner image={SmallBanner2} text="The Walking Dead" url="/"/>
                    <SmallBanner image={SmallBanner3} text="Peaky Blinders" url="/"/>
                    <SmallBanner image={SmallBanner4} text="Arcane" url="/"/>
                    <SmallBanner image={SmallBanner5} text="Dark" url="/"/>
                    <SmallBanner image={SmallBanner6} text="Black Mirror" url="/"/>
                    <SmallBanner image={SmallBanner7} text="Better Call Saul" url="/"/>
                    <img src={ArrowRight} alt=""/>
                </LatestContent>
            </Latest>
            <Categories>
                <h1>Categories</h1>
                <hr/>
                <CategoriesContent>
                    <MediumBanner image={MediumBanner1} text="Action" url="/"/>
                    <MediumBanner image={MediumBanner2} text="Comedy" url="/"/>
                    <MediumBanner image={MediumBanner3} text="Science Fiction" url="/"/>
                    <MediumBanner image={MediumBanner4} text="Horror" url="/"/>
                    <img src={ArrowRight} alt=""/>
                </CategoriesContent>
            </Categories>
        </HomeContainer>
    )
}

export default Home;

const HomeContainer = styled.div`
    background-color: #0e1428;
    background-image: url(${BgHome});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
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
    background-color: rgba(14,20,40,0.7);
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
        font-weight: bold;
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
    background-color: rgba(14,20,40,0.7);
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
    background-color: rgba(14,20,40,0.7);
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