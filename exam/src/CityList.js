import React, { useState, useEffect } from 'react';
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
    background-color: #dcdcdc;
`;

const CitiesList = styled.div`
    height: calc(100vh - 130px);
    width: 100%;
`;



function CityList() {

    const [cities, setCities] = useState([]);    
      const addCity = () => {
		navigator.geolocation.getCurrentPosition((position) => { 
            const linkText = `https://api.openweathermap.org/data/2.5/weather?lat=${  position.coords.latitude  }&lon=${  position.coords.longitude}&appid=5853204d3a01401169e317d291f5e1f4`;
            fetch(`${linkText}`)
              .then(res => res.json())
              .then(data => {
                console.log(data.name);
                setCities([
                    ...cities,
                    data]);
              });
            
        });
        
    };
    

	return (
		<MainList>
            <CityListHeader />
                {cities.map((item) => (
                    <City {...item} />
                ))}
            <img src={plusbutton} onClick={addCity} className="plusbutton" alt="plus_button" />
            <CitiesList />
        </MainList>
	);
}

export default CityList;