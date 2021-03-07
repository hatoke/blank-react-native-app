import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import welcome from "../pages/welcome";
import example_route_page from "../pages/example_route_page";
import Main_stack_header from "../pages/component/main_stack_header";

const Stack = createStackNavigator();

export default class main_stack_navigator extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Stack.Navigator className="Navigator" initialRouteName={"welcome"}>
        <Stack.Screen name={"welcome"} component={welcome} options={{ headerShown: true, headerTitle: props => <Main_stack_header {...props} /> }} />
        <Stack.Screen name={"example_route_page"} component={example_route_page} options={{ headerShown: true, headerTitle: props => <Main_stack_header {...props} /> }} />
      </Stack.Navigator>
    );
  }

}
