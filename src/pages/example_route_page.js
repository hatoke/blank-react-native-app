import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import _mixin from "../assets/style/_mixin";

import { connect } from "react-redux";

class example_route_page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ ..._mixin.flex(1, "column", "center", "center") }}>
        <Text style={{ marginBottom: 35 }}>{this.props.test_variable} redux variable test</Text>
        <Text style={{ marginBottom: 35 }}>Example route page</Text>
        <TouchableOpacity style={{ ..._mixin.padding(10, 5) }} onPress={() => {
          this.props.navigation.goBack();
        }}>
          <Text>Press me for back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    test_variable: state.user.test_variable,
  };
};


export default connect(mapStateToProps)(example_route_page);
