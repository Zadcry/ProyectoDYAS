import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LargeBanner = ({ image, text, url }) => {
    return (
        <CardContainer className={"LargeBanner"} to={url}>
            <CardWrapper>
                <CardImage src={image} alt={text} />
                <CardText>{text}</CardText>
            </CardWrapper>
        </CardContainer>
    );
};

export default LargeBanner;

const CardContainer = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
    margin: 3%;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
`;

const CardText = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    margin: 8px;
    text-align: left;
    font-size: 2em;
    font-weight: bold;
    padding-left: 15px;
    padding-bottom: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const CardWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;