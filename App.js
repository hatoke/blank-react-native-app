import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import main_stack_navigator from "./src/routers/main_stack_navigator";

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRoutename={"main_stack_navigator"} headerMode={"none"} backBehavior={"none"}>
          <Stack.Screen name={"main_stack_navigator"} component={main_stack_navigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }


}
