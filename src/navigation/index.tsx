import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CartScreen,
  GetStarted,
  Home,
  PlacedOrderScreen,
  ProfileScreen,
  RestaurantScreen,
  RestaurantsScreen,
  SignIn,
  TestPage,
  AppLoadingScreen,
  SignUp,
  RegisterationScreen,
} from "@screens";
import { defaultTheme } from "./theme";
import { baseOptions } from "./options";
import { RootStackParamList } from "@types";

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * This component is the the navigation Center of the Application
 * @returns a Navigation container of react-navigation library
 * that handles all navigation of the Application
 */
export default function Navigation() {
  return (
    <NavigationContainer theme={defaultTheme}>
      <Stack.Navigator initialRouteName="AppLoadingScreen">
        {/* Adding Different Screen in the Navigation Stack */}
        <Stack.Screen name="Home" component={Home} options={baseOptions} />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={baseOptions}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
          options={baseOptions}
        />
        <Stack.Screen
          name="PlacedOrderScreen"
          component={PlacedOrderScreen}
          options={baseOptions}
        />
        <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
        <Stack.Screen name="SignIn" component={SignIn} options={baseOptions} />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={baseOptions}
        />
        <Stack.Screen
          name="TestPage"
          component={TestPage}
          options={baseOptions}
        />
        <Stack.Screen
          name="AppLoadingScreen"
          component={AppLoadingScreen}
          options={baseOptions}
        />
        <Stack.Screen name="SignUp" component={SignUp} options={baseOptions} />
        <Stack.Screen name="Registeration" component={RegisterationScreen} options={baseOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
