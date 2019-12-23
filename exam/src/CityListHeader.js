import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import back from './Pictures/back.png';
import info from './Pictures/info.png';
import styled from 'styled-components';

const TopBar = styled.div`
    background-color: white;
    display: inline-block;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 90%;
    padding: 20px;
    color: #fff;
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
`;

const Text = styled.div`
    font-size: xx-large;
    margin-right: 15px;
    margin-left: 5px;
    text-align: left;
    color: black;
`;



function CityListHeader() {
	return (
		<TopBar>
			<Link to="/">
				<img src={back} className="icons" alt="icons" />
			</Link>
            <Text>Manage cities</Text>
			<img src={info} className="icons" alt="icons" />
		</TopBar>
	);
}

export default CityListHeader;