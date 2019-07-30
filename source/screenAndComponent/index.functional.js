/*
 * app/{{path}}/{{name}}/index.js
 */

// import react and react-native elements
import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

const {{name}} = (props) => {
  const {container, text} = styles;
    return (
      <View style={container}>
        <Text style={text}>Hello from {{path}}/{{name}}! Prop "text" is equal to {props.text}</Text>
      </View>
    );
}

{{name}}.defaultProps = {
  text: 'default string'
};

{{name}}.propTypes = {
  text: PropTypes.string
};

export default {{name}};
