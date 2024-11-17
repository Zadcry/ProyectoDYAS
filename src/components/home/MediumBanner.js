import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MediumBanner = ({ image, text, url }) => {
    return (
        <CardContainer to={url}>
            <CardWrapper>
                <CardImage src={image} alt={text} />
                <CardText>{text}</CardText>
            </CardWrapper>
        </CardContainer>
    );
};

export default MediumBanner;

const CardContainer = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
    margin: 1%;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
`;

const CardWrapper = styled.div`
    position: relative;
    overflow: hidden;
`;