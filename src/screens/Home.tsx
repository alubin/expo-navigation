import React from 'react';
import {View, Button} from 'react-native';
import {useAuth} from '../AuthContext';

const Home = () => {
    const {logOut} = useAuth();
    return (
        <View>
            <Button title="Log out" onPress={logOut} />
        </View>
    );
};

export default Home;
