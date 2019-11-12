import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import logo from '../assets/logo.svg'

const year = new Date().getFullYear()

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`

const TopBar = styled.div`
	background-color: #550445;
	height: 60px;
	padding: 20px;
	color: #fff;
	display: flex;
	.redux-logo {
		animation: ${rotate360} infinite 20s linear;
		height: 80px;
	}
`

function Header() {
	return (
		<TopBar>
			<img src={logo} className="redux-logo" alt="logo" />
		</TopBar>
	)
}

export default Header;
