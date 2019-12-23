import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const CityBlock = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopBlock = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    border-radius: 10px 10px 0 0;
    border-bottom: 4px solid black;
`;

const CityInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-top: 10px;
`;

const CityNameFont = styled.div`
    font-size: xx-large;
    font-style: bold;
    margin-right: 15px;
    margin-left: 5px;
    text-align: left;
    color: black;
`;

const CountryNameFont = styled.div`
    font-size: large;
    margin-right: 15px;
    margin-left: 5px;
    text-align: left;
    color: grey;
`;

const CurrentCondition = styled.div`
    display: flex;
    margin-right: 20px;
`;

const CurrentConditionText = styled.div`
    font-size: 50px;
`;



function City(test) {
    console.log(test);
	return (
        <CityBlock>
            <TopBlock>
                <CityInfo>
                    <CityNameFont>
                        {test.name}
                    </CityNameFont>
                    <CountryNameFont>
                        {test.sys.country}
                    </CountryNameFont>
                </CityInfo>
                <CurrentCondition>
                    <CurrentConditionText>
                        {Math.round(test.main.temp - 273.15).toString()}
                    </CurrentConditionText>
                </CurrentCondition>
            </TopBlock>
        </CityBlock>
	);
}

export default City;