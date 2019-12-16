import React from 'react';
import styled from '@emotion/styled';
import facebook from '../assets/facebook.png';
import yandex from '../assets/yandex.png';
import vk from '../assets/vk.png';

const BackgroundForm = styled.div`
    background: #550445;
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoginForm = styled.div`
    margin-top: 30px;
    background: #fff;
    width: 80%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

const VkLoginForm = styled.div`
    color: #fff;
    font-size: x-large;
    margin-top: 20px;
    background: #597da3;
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: #fff;
`;

const YandexLoginForm = styled.div`
    margin-top: 20px;
    color: #fff;
    font-size: x-large;
    background: #ffcc00;
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const FacebookLoginForm = styled.div`
    font-size: x-large;
    color: #fff;
    margin-top: 20px;
    background: #3b5998;
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const GoogleLoginForm = styled.div`
    font-size: x-large;
    color: #fff;
    margin-top: 20px;
    background: #db4437;
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const TitleTextLogin = styled.div`
    color: #fff;
    font-weight: bold;
    font-size: 30px;
    width: 80%
    
`;

const LoginTitleText = styled.div`
    font-weight: bold;
    font-size: 40px;
    color: black;
    
`;

const loginWithVk = () => {

	const response = fetch('http://0.0.0.0:8000/login/vk-oauth2',
		{
			headers: {
				Authentication: 'secret'
			},

			redirect: 'manual'
		}
	);

	alert(response);
};

export default function Login() {
	return (
		<BackgroundForm>
            
			<TitleTextLogin>
                Welcome to YouChat!
			</TitleTextLogin>
			<LoginForm>
				<LoginTitleText>
                    Login
				</LoginTitleText>
				<input className="logintext" placeholder="User name" />
				<input type="password" className="logintext" placeholder="Password" />
				<div className="notregistered">Not registered yet?</div>
			</LoginForm>
			<VkLoginForm onClick={loginWithVk}>
				<img src={vk} className="loginpix" alt="vk" />
                Login wih Vk!
			</VkLoginForm>
			<YandexLoginForm>
				<img src={yandex} className="loginpix" alt="vk" />
                Login wih Yandex!
			</YandexLoginForm>
			<FacebookLoginForm>
				<img src={facebook} className="loginpix" alt="vk" />
                Login wih Facebook!
			</FacebookLoginForm>
			<GoogleLoginForm>
				<img src={vk} className="loginpix" alt="vk" />
                Login wih Google!
			</GoogleLoginForm>
		</BackgroundForm>
	);
};