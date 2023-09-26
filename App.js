import React from "react";
import Home from './src/screens/Home';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";
import CourseDetails from "./src/screens/CourseDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' options={{
          headerShown:false
        }}>
          {(props)=><Home {...props} channelName={"WarTech"}/>}
        </Stack.Screen>
        <Stack.Screen name="Course" component={Course} 
        options={{
          headerTitleStyle:{
            fontWeight:"bold"
          },
          headerTitle:"Courses",
          headerTitleAlign:"center"
        }}/>
        <Stack.Screen name="UserData" component={UserData}  options={{
          headerTitleStyle:{
            fontWeight:"bold"
          },
          headerTitle:"Student Data",
          headerTitleAlign:"center"
        }}/>
        <Stack.Screen name="About" component={About}  options={{
          headerTitleStyle:{
            fontWeight:"bold"
          },
          headerTitleAlign:"center"
        }}/>
        <Stack.Screen name="Contact" component={Contact}  options={{
          headerTitleStyle:{
            fontWeight:"bold"
          },
          headerTitleAlign:"center"
        }}/>
        <Stack.Screen name="CourseDetails" component={CourseDetails}  options={{
          headerTitleStyle:{
            fontWeight:"bold"
          },
          headerTitleAlign:"center"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


