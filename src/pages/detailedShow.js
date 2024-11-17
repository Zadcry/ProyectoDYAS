import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Poster1 from "../assets/banners/Poster1.png";
import Favorite from "../assets/logos/Favorite.png";


function DetailedShow() {
    return (
        <DetailedShowContainer>
            <img src={Poster1} alt="placeholder" />
            <ShowDescription>
                <ShowTitle>
                    <h1>Stranger Things</h1>
                    <img src={Favorite} alt=""/>
                </ShowTitle>
                <hr/>
                <ShowContent>
                    <p>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
                    <PlayButton to={"/"}>
                        <PlayIcon />
                        Play
                    </PlayButton>
                </ShowContent>
            </ShowDescription>
        </DetailedShowContainer>
    );
}

export default DetailedShow;

const DetailedShowContainer = styled.div`
    background-color: #0e1428;
    color : white;
    padding: 20px;
    text-align: center;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    & img {
        width: 25%;
    }
`;

const ShowDescription = styled.div`
    margin-left: 80px;
    text-align: left;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    & h1 {
        font-size: 3rem;
        margin-top: 0;
        margin-bottom: 10px;
    }
    & p {
        font-size: 1.5rem;
        margin-top: 10px;
    }
    & hr {
        border: 2px solid #F0F757;
        width: 100%;
        margin-bottom: 20px;
    }
`;

const ShowTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    & img {
        width: 8%;
    }
`;

const ShowContent = styled.div`

    width: 100%;

`;

const PlayButton = styled(Link)`
  display: inline-flex;
    width: 100px;
    height: 40px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: linear-gradient(180deg, #00c6ff, #ffff1c);
  color: white;
  font-size: 2em;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 20px;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const PlayIcon = styled.span`
  margin-right: 8px;
  display: flex;
  align-items: center;

  &::before {
    content: "▶";
    font-size: 1em;
    color: white;
  }
`;