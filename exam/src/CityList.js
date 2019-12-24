import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CityListHeader from './CityListHeader';
import styled from 'styled-components';
import plusbutton from './Pictures/1plus.png';
import './App.css';
import City from './City';

const MainList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fb607f;
`;

const CitiesList = styled.div`
    height: calc(100vh - 130px);
    width: 100%;
`;

var firstTime = false;

function CityList() {

    const [cities, setCities] = useState([]);  

    const FirstDraw = () => {
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

    const addCity = () => {
    };

    if(!firstTime) {
        FirstDraw();
        firstTime = true;
    };


	return (
		<MainList>
            <CityListHeader HeaderText={'Manage Cities'} />
                {cities.map((item) => (
                    <City {...item} />
                ))}
            <Link to="/addCity">
                <img src={plusbutton} onClick={addCity} className="plusbutton" alt="plus_button" />
            </Link>
            <CitiesList />
        </MainList>
	);
}

export default CityList;