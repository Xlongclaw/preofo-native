import { StyleSheet, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  CartScreen,
  Home,
  PlacedOrderScreen,
  ProfileScreen,
  RestaurantScreen,
  RestaurantsScreen,
  SignIn,
} from "@screens";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#f5f5f5",
          primary: "",
          border: "",
          card: "",
          notification: "",
          text: "",
        },
        dark: false,
      }}
    >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false, navigationBarColor: "#f5f5f5" }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ headerShown: false, navigationBarColor: "#f5f5f5" }}
        />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
          options={{ headerShown: false, navigationBarColor: "#f5f5f5" }}
        />
        <Stack.Screen
          name="PlacedOrderScreen"
          component={PlacedOrderScreen}
          options={{ headerShown: false, navigationBarColor: "#f5f5f5" }}
        />
        <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
