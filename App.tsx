import 'react-native-gesture-handler';
import React, {useMemo, useState} from 'react';
import {
    getFocusedRouteNameFromRoute,
    NavigationContainer,
    NavigatorScreenParams,
    Route,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Settings from './src/screens/Settings';
import {AuthContext} from './src/AuthContext';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import SignIn from "./src/screens/SignIn";

Amplify.configure(config);

type RootStackParamList = {
    SignIn: undefined;
    SignUp: undefined;
    RootTab: NavigatorScreenParams<RootTabParamList>;
};

type RootTabParamList = {
    Home: undefined;
    Settings: undefined;
};

const getTabHeaderTitle = (
    route: Route<'RootTab', NavigatorScreenParams<RootTabParamList>>,
) => {
    const routeName = getFocusedRouteNameFromRoute(route);

    switch (routeName) {
        case 'Home':
            return 'Home';
        case 'Settings':
            return 'Settings';
        default:
            return 'Home';
    }
};

const App = () => {
    const RootStack = createStackNavigator<RootStackParamList>();
    const RootTab = createBottomTabNavigator<RootTabParamList>();

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const authContext = useMemo(
        () => ({
            logIn: () => {
                console.log("Logged In");
                setIsLoggedIn(true);
            },
            logOut: () => {
                console.log("Logged Out");
                setIsLoggedIn(false);
            },
        }),
        [],
    );

    const RootTabScreens = () => (
        <RootTab.Navigator>
            <RootTab.Screen name="Home" component={Home} />
            <RootTab.Screen name="Settings" component={Settings} />
        </RootTab.Navigator>
    );

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                <RootStack.Navigator>
                    {isLoggedIn ? (
                        <RootStack.Screen
                            name="RootTab"
                            component={RootTabScreens}
                            options={({route}) => ({
                                headerTitle: getTabHeaderTitle(route),
                            })}
                        />
                    ) : (
                        // <RootStack.Screen name="Login" component={Login} />
                        <RootStack.Screen name="SignIn" component={SignIn} />
                    )}
                </RootStack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};

export default App;

