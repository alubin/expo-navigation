import React from 'react';
import {Button, View, Text} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../types';

type ViewProps = {
    navigation: StackNavigationProp<HomeStackParamList>;
};

const Details = ({navigation}: ViewProps) => {
    return (
        <View>
            <Text>Details</Text>
            <Button title="Edit" onPress={() => navigation.navigate('Edit')} />
        </View>
    );
};

export default Details;
