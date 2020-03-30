import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default {
	title: 'Button',
	component: Button,
};

export const Button1 = () => <Button color="danger" onClick={action('button-click')}>Button</Button>;
