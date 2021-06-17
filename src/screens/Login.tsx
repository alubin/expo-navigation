import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../AuthContext';

const Login = () => {
    const {logIn} = useAuth();
    return (
        <View>
            <Button title="Log in" onPress={logIn} />
        </View>
    );
};

export default Login;
