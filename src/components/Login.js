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
    background: #597da3;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    color: #fff;
`;

const YandexLoginForm = styled.div`
    color: #fff;
    font-size: x-large;
    background: #ffcc00;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const FacebookLoginForm = styled.div`
    font-size: x-large;
    color: #fff;
    background: #3b5998;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const GoogleLoginForm = styled.div`
    font-size: x-large;
    color: #fff;
    background: #db4437;
    width: 100%;
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
			<a className='loginherf' href="localhost:8000/users/list">
				<div>
					<VkLoginForm href="/login/vk-oauth2">
						<img src={vk} className="loginpix" alt="vk" />
                        Login wih Vk!
					</VkLoginForm>
				</div>
			</a>
			<a className='loginherf' href="localhost:8000/users/list">
				<div>
					<YandexLoginForm>
						<img src={yandex} className="loginpix" alt="vk" />
                        Login wih Yandex!
					</YandexLoginForm>
				</div>
			</a>
			<a className='loginherf' href="localhost:8000/users/list">
				<div>
					<FacebookLoginForm>
						<img src={facebook} className="loginpix" alt="vk" />
                        Login wih Facebook!
					</FacebookLoginForm>
				</div>
			</a>
			<a className='loginherf' href="localhost:8000/users/list">
				<div>
					<GoogleLoginForm>
						<img src={vk} className="loginpix" alt="vk" />
                        Login wih Google!
					</GoogleLoginForm>
				</div>
			</a>
		</BackgroundForm>
	);
};