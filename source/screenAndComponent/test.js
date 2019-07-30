/*
 * app/{{path}}/{{name}}/{{name}}.test.js
 */

import React from 'react';
import renderer from 'react-test-renderer';

import {{name}} from '.';

it('renders correctly with no props', () => {
  const tree = renderer.create(<{{name}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
