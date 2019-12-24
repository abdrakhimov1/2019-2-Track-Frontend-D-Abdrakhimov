import React, { useState, useEffect } from 'react';
import CityListHeader from './CityListHeader';
import styled from 'styled-components';
import './App.css';
import { Link, Switch } from 'react-router-dom';

const MainList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fb607f;
`;

const CitiesList = styled.div`
    height: calc(100vh - 110px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AddButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 80%;
    height: 80px;
    border-radius: 10px;
    font-size: xx-large;
    font-weight: 300;
    margin-top: 80px;
`;

const MyText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80px;
    font-size: xx-large;
    font-weight: 300;
    color: black;
`;


function Menu() {

    const [cities, setCities] = useState([]);

    const addCityWithMyLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => { 
            const linkText = `https://api.openweathermap.org/data/2.5/weather?lat=${  position.coords.latitude  }&lon=${  position.coords.longitude}&appid=5853204d3a01401169e317d291f5e1f4`;
            fetch(`${linkText}`)
              .then(res => res.json())
              .then(data => {
                setCities([
                    ...cities,
                    data]);
              });
        });
    };

	return (
		<MainList>
            <CityListHeader HeaderText={'Add City'} />
            <CitiesList>
                <AddButton onClick={addCityWithMyLocation}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <MyText>
                            Add City with my coords
                        </MyText>
                    </Link>
                </AddButton>
                <AddButton>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <MyText>
                            Add City by name
                        </MyText>
                    </Link>
                </AddButton>
                <AddButton>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <MyText>
                            Add City by id
                        </MyText>
                    </Link>
                </AddButton>
            </CitiesList>
        </MainList>
	);
}

export default Menu;