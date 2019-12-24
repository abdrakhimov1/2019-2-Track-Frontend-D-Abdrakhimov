import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

const CityBlock = styled.div`
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const TopBlock = styled.div`
    width: 90%;
    height: 80px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid black;
`;

const BottomBlock = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    background-color: white;
    justify-content: space-between;
    border-radius: 0 0 10px 10px;
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
    font-weight: 300;
`;

const CountryNameFont = styled.div`
    font-size: large;
    margin-right: 15px;
    margin-left: 5px;
    text-align: left;
    color: grey;
    font-weight: 300;
`;

const CurrentCondition = styled.div`
    display: flex;
    margin-right: 20px;
`;

const CurrentConditionText = styled.div`
    font-size: 50px;
    font-weight: 300;
`;

const AdditionalText = styled.div`
    margin-left: 35px;
    margin-right: 35px;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 300;
`;



function City(test) {
    const linkText = "http://openweathermap.org/img/wn/"+ test.weather[0].icon +"@2x.png";
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
                    <img src={linkText} />
                    <CurrentConditionText>
                        {Math.round(test.main.temp - 273.15).toString()}
                    </CurrentConditionText>
                </CurrentCondition>
            </TopBlock>
            <BottomBlock>
                <AdditionalText>
                    {"Humidity: " + test.main.humidity + "% | Feels like: " + Math.round(test.main.feels_like - 273.15).toString()}
                </AdditionalText>
                <AdditionalText>
                    {Math.round(test.main.temp_max - 273.15).toString() + " / " + Math.round(test.main.temp_min - 273.15).toString()}
                </AdditionalText>
            </BottomBlock>
        </CityBlock>
	);
}

export default City;