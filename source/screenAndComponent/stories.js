/*
 * app/{{path}}/{{name}}/stories.js
 */

import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import {{name}} from '.';

const cont = {
  flex: 1
};

storiesOf('{{name}}', module)
  .addDecorator(getStory => <View style={cont}>{getStory()}</View>)
  .add('no props', () => (
    <{{name}} />
  ));