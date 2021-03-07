import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import _mixin from "../assets/style/_mixin";

import FontAwesome from "react-native-vector-icons/FontAwesome5";

export default class welcome extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{ ..._mixin.flex(1, "column", "center", "center") }}>
        <FontAwesome name={"react"} style={{ fontSize: 80, marginBottom: 35 }} />
        <Text style={{ marginBottom: 35 }}>Your Welcome :)</Text>
        <TouchableOpacity style={{ ..._mixin.padding(10, 5) }} onPress={() => {
          this.props.navigation.navigate("example_route_page");
        }}>
          <Text>Press me for route</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
