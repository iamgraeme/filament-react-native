/*
 * app/{{path}}/{{name}}/index.js
 */

// import react and react-native elements
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

// import redux functions to connect controller to app state
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import redux actions
// import * as SampleActions from 'app/redux/Sample';

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
      // store your screen's state in here
    };
  }

  /**
   * Render component
   */
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello from {{path}}/{{name}}!  Prop "text" is equal to {this.props.text}</Text>
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

/**
 * Map component props to redux app state
 * @param {*} state - the redux app state
 */
const mapStateToProps = state => ({
  // sampleStuff: state.Sample
});

/**
 * Bind redux actions to component
 * @param {*} dispatch
 */
const mapDispatchToProps = dispatch => ({
  // SampleActions: bindActionCreators(SampleActions, dispatch)
});

// export the connect function
export default connect(mapStateToProps, mapDispatchToProps)({{name}});
