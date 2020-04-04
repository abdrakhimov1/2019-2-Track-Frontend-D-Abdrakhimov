import React from 'react';
import { render, unmountComponentAtNode, ReactDOM } from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

import Message from '../components/Message';

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

it('renders without props', () => {
	act(() => {
		render(<Message text="TestText" />, container);
	});
	expect(container.textContent).toBe('TestText');
});

it('renders correctly', () => {
	const tree = renderer
		.create(<Message UserName="Me" text="TestMessage" messageTime="10:30" geoType="false" imgType="false" />)
		.toJSON();
	expect(tree).toMatchInlineSnapshot(`
    <div>
      <div
        className="css-13hfsni"
      >
        <div
          className="css-krg4hw"
        >
          <div
            className="css-1f0vuor"
          >
            Me
          </div>
          <div
            className="css-1loxwxd"
          >
            10:30
          </div>
        </div>
        <div
          className="css-574eo0"
        >
          TestMessage
        </div>
      </div>
    </div>
  `);
});
