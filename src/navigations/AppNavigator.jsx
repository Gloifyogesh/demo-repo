import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/loginScreen';
import Signup from '../screens/signupScreen';
import DrawerNavigator from './DrawerNavigator';
import {useSelector} from 'react-redux';
import Splash from '../screens/SplashScreen';
import OnBoarding from '../screens/onboardingScreen';
import ProfileSelection from '../screens/ProfileSelection';
import ContactVerification from '../screens/ContactVerification';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const isSignedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
          </>
        ) : (
          <>
            <Stack.Screen name="splashScreen" component={Splash} />
            <Stack.Screen name="onboardingScreen" component={OnBoarding} />
            <Stack.Screen name="loginScreen" component={Login} />
            <Stack.Screen name="signupScreen" component={Signup} />
            <Stack.Screen
              name="profileSelectionScreen"
              component={ProfileSelection}
            />
            <Stack.Screen
              name="contactVerification"
              component={ContactVerification}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
