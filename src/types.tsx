import {NavigatorScreenParams} from '@react-navigation/native';

/**Navigation types */
export type HomeNonModalStackParamList = {
    Home: undefined;
    Details: undefined;
};

export type SettingsStackParamList = {
    Settings: undefined;
};

export type HomeStackParamList = {
    HomeNonModalStack: NavigatorScreenParams<HomeNonModalStackParamList>;
    Edit: undefined;
};

export type RootTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>;
    SettingsStack: NavigatorScreenParams<SettingsStackParamList>;
};

export type RootStackParamList = {
    Login: undefined;
    RootTab: NavigatorScreenParams<RootTabParamList>;
};
/**End Navigation types */
