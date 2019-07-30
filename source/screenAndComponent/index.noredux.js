/*
 * app/{{path}}/{{name}}/index.js
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// import screens styles
import styles from './styles';

class {{name}} extends Component {
  /**
   * Construct component class
   * @param {object} props
   */
  constructor (props: {}) {
    super(props);

    this.state = {
      // store component state here
    }
  }

  /**
   * Render component
   */
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from {{path}}/{{name}}! Prop "text" is equal to {this.props.text}</Text>
      </View>
    );
  }
}

{{name}}.defaultProps = {
  text: 'default string'
};

{{name}}.propTypes = {
  text: PropTypes.string
};

export default {{name}};
