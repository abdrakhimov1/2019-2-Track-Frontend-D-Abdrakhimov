import React from 'react';
import { render, unmountComponentAtNode, ReactDOM } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import Header from '../components/Header';

let container = null;

beforeEach(() => {
	container = document.createElement('div');
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('renders correctly', () => {
	const tree = renderer.create(<Header UserName="TestUserName" lastSeen="10:30" />).toJSON();
	expect(tree).toMatchInlineSnapshot(`
    <div
      className="css-fzqyb7"
    >
      <img
        alt="ava"
        className="ava"
        src="avatar.png"
      />
      <div
        className="css-1iyoj2o"
      >
        <div
          className="css-n9de73"
        >
          TestUserName
        </div>
        <div
          className="css-1c30huk"
        >
          last:seen
        </div>
      </div>
      <img
        alt="add"
        className="add"
        src="info.png"
      />
      <img
        alt="add"
        className="add"
        src="search.png"
      />
    </div>
  `);
});
